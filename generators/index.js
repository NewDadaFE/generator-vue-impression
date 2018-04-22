const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const mkdirp = require('mkdirp')
const path = require('path')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    this.props = {}
  }

  prompting() {
    const done = this.async()

    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the lovely ' +
          chalk.red('generator-vue-impression') +
          ' generator!'
      )
    )

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Please input project name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please input project description:'
      },
      {
        type: 'confirm',
        name: 'isInstall',
        message: 'Would you like to install dependencies?'
      }
    ]

    return this.prompt(prompts)
      .then(answer => {
        if (!answer.isInstall) return answer

        return this.prompt([
          {
            type: 'list',
            name: 'installType',
            message: 'Please choose install tool:',
            choices: ['yarn', 'npm'],
            default: 'yarn'
          }
        ]).then(type => ({ ...answer, ...type }))
      })
      .then(answer => {
        this.props = answer
        done()
      })
  }

  defaults() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        'Your generator must be inside a folder named ' +
          chalk.cyan(this.props.name) +
          '\n' +
          "I'll automatically create this folder."
      )
      mkdirp(this.props.name)
      this.destinationRoot(this.destinationPath(this.props.name))
    }
  }

  writing() {
    const { name, description } = this.props

    // 设置copy源文件位置
    this.sourceRoot(path.join(__dirname, 'standard'))

    const ignore = [
      this.templatePath('README.md'),
      this.templatePath('package.json'),
      this.templatePath('dist/**'),
      this.templatePath('node_modules/**'),
      this.templatePath('index.html')
    ]

    // copy文件夹
    this.fs.copy(this.templatePath('.'), '.', {
      // options: https://github.com/isaacs/node-glob#options
      globOptions: {
        dot: true,
        ignore
      }
    })

    // copy README.md
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { name, description }
    )

    // copy index.html
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      { name }
    )

    // cp-package.json
    const pkg = this.fs.readJSON(this.templatePath('package.json'))
    pkg.name = name
    pkg.description = description
    pkg.keywords = [name, 'Vue 2.0']

    this.fs.writeJSON(this.destinationPath('package.json'), pkg)
  }

  install() {
    const { name, isInstall, installType } = this.props

    const print = installTool => {
      this.log(yosay(`Success! Created ${chalk.cyan(name)}!`))

      this.log('Inside that directory, you can run several commands:')
      this.log(chalk`
      {cyan ${installTool} start}
        Starts the development server.

      {cyan ${installTool} install}
        Install dependencies.

      {cyan ${installTool} run deploy}
        depoly static files to cdn.
      `)

      this.log('We suggest that you begin by typing:')
      this.log(chalk`
      {cyan cd ${name}}
      {cyan ${installTool} start}
      `)

      this.log(chalk.green('Happy hacking!'))
    }

    if (!isInstall) {
      print('yarn')
      return
    }

    const execInstall =
      installType === 'yarn'
        ? this.yarnInstall.bind(this)
        : this.npmInstall.bind(this)

    execInstall().then(() => {
      print(installType)
    })
  }
}
