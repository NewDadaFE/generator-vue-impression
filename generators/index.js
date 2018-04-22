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
        type: 'list',
        name: 'adaptType',
        message: 'Please choose you adapt type: (rem, vw)',
        choices: ['rem', 'vw'],
        default: 'rem'
      },
      {
        type: 'confirm',
        name: 'install',
        message: 'Would you like to install dependencies?'
      }
    ]

    return this.prompt(prompts)
      .then(answer => {
        if (!answer.install) return answer

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
          chalk.blue(this.props.name) +
          '\n' +
          "I'll automatically create this folder."
      )
      mkdirp(this.props.name)
      this.destinationRoot(this.destinationPath(this.props.name))
    }
  }

  writing() {
    // 设置copy源文件位置
    this.sourceRoot(path.join(__dirname, 'standard'))

    const ignores = [
      this.templatePath('README.md'),
      this.templatePath('package.json'),
      this.templatePath('dist/**'),
      this.templatePath('.postcssrc*'),
      this.templatePath('src/main.js'),
      this.templatePath('node_modules/**')
    ]

    // copy文件夹
    this.fs.copy(this.templatePath('.'), '.', {
      // options: https://github.com/isaacs/node-glob#options
      globOptions: {
        dot: true,
        ignore: ignores
      }
    })

    // copy-README.md
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        name: this.props.name,
        description: this.props.description
      }
    )

    // cp postcss/main.js
    let subfix = ''
    let install = {
      dep: {
        'postcss-pxtorem': '^4.0.1'
      },
      prod: {}
    }
    if (this.props.adaptType === 'vw') {
      subfix = 'vw.'
      install.dep = {
        'postcss-px-to-viewport': '^0.0.3'
      }
      install.prod = {
        'viewport-units-buggyfill': '^0.6.2'
      }
    }

    this.fs.copy(this.templatePath(`.postcssrc.${subfix}js`), `.postcssrc.js`)
    this.fs.copy(this.templatePath(`src/main.${subfix}js`), `src/main.js`)

    // cp-package.json
    const pkg = this.fs.readJSON(this.templatePath('package.json'))
    pkg.name = this.props.name
    pkg.description = this.props.description
    pkg.keywords = [this.props.name, 'Vue 2.0']
    pkg.devDependencies = { ...pkg.devDependencies, ...install.dep }
    pkg.dependencies = { ...pkg.dependencies, ...install.prod }

    if (this.props.adaptType === 'vw') {
      delete pkg.devDependencies['postcss-pxtorem']
    }

    this.fs.writeJSON(this.destinationPath('package.json'), pkg)
  }

  install() {
    this.log(yosay(`WOW! I'm all ${chalk.red('done')}!`))

    if (!this.props.install) return

    this.props.installType === 'yarn' ? this.yarnInstall() : this.npmInstall()
  }
}
