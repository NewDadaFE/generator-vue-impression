'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');
var extend = require('deep-extend');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
    initializing: function () {
        this.props = {};
    },
    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the lovely ' + chalk.red('generator-vue-impression') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'projectName',
            message: 'Please input project name:',
        }, {
            type: 'input',
            name: 'projectDesc',
            message: 'Please input project description:'
        },  {
            type: 'input',
            name: 'projectAuthor',
            message: 'Author (NewDadaFE):',
            default: 'NewDadaFE'
        }, {
            type: 'list',
            name: 'projectLicense',
            message: 'Please choose license:',
            choices: ['MIT', 'ISC'],
        }];

        return this.prompt(prompts).then(function (props) {
            this.props = props;
            done();
        }.bind(this));
    },
    defaults: function () {
        if (path.basename(this.destinationPath()) !== this.props.projectName) {
          this.log(
            'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
            'I\'ll automatically create this folder.'
          );
          mkdirp(this.props.projectName);
          this.destinationRoot(this.destinationPath(this.props.projectName));
        }
    },
    writing: function () {
        // == Copy config
        this.fs.copy(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );

        this.fs.copy(
            this.templatePath('editorconfig'),
            this.destinationPath('.editorconfig')
        );

        this.fs.copy(
            this.templatePath('babelrc'),
            this.destinationPath('.babelrc')
        );

        this.fs.copy(
            this.templatePath('eslintrc.js'),
            this.destinationPath('.eslintrc.js')
        );

        this.fs.copy(
            this.templatePath('eslintignore'),
            this.destinationPath('.eslintignore')
        );

        this.fs.copy(
            this.templatePath('webpack.dev.config.js'),
            this.destinationPath('webpack.dev.config.js')
        );

        this.fs.copy(
            this.templatePath('webpack.prod.config.js'),
            this.destinationPath('webpack.prod.config.js')
        );

        this.fs.copy(
            this.templatePath('gulpfile.js'),
            this.destinationPath('gulpfile.js')
        );

        this.fs.copy(
            this.templatePath('index.html'),
            this.destinationPath('index.html')
        );

        // == README
        var readmeTmpl = _.template(this.fs.read(this.templatePath('README.md')));
        this.fs.write(this.destinationPath('README.md'), readmeTmpl({
            name: this.props.projectName,
            description: this.props.projectDesc,
            license: this.props.projectLicense,
            author: this.props.projectAuthor
        }));

        // == package.json
        var pkg = this.fs.readJSON(this.templatePath('package.json'), {});
        extend(pkg, {
            name: this.props.projectName,
            author: this.props.projectAuthor,
            description: this.props.projectDesc,
            license: this.props.projectLicense,
            keywords: [this.props.projectName, 'Vue 2.0'],
        });
        this.fs.writeJSON(this.destinationPath('package.json'), pkg);

        // == mkdirp
        mkdirp('src/images');
        mkdirp('src/scripts/actions');
        mkdirp('src/scripts/components');
        mkdirp('src/scripts/constants');
        mkdirp('src/scripts/layout');
        mkdirp('src/scripts/mutations');
        mkdirp('src/scripts/utils');
        mkdirp('src/scripts/views');
        mkdirp('src/styles');

        // == copy demo

        // styles
        this.fs.copy(
            this.templatePath('src/styles/index.scss'),
            this.destinationPath('src/styles/index.scss')
        );

        this.fs.copy(
            this.templatePath('src/styles/project.scss'),
            this.destinationPath('src/styles/project.scss')
        );

        // js
        this.fs.copy(
            this.templatePath('src/scripts/index.js'),
            this.destinationPath('src/scripts/index.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/store.js'),
            this.destinationPath('src/scripts/store.js')
        );

        this.fs.copy(
            this.templatePath('src/scripts/router.js'),
            this.destinationPath('src/scripts/router.js')
        );

        // constants
        this.fs.copy(
            this.templatePath('src/scripts/constants/URL.js'),
            this.destinationPath('src/scripts/constants/URL.js')
        );
        this.fs.copy(
            this.templatePath('src/scripts/constants/MutationType.js'),
            this.destinationPath('src/scripts/constants/MutationType.js')
        );

        // actions
        this.fs.copy(
            this.templatePath('src/scripts/actions/index.js'),
            this.destinationPath('src/scripts/actions/index.js')
        );
        this.fs.copy(
            this.templatePath('src/scripts/actions/base.js'),
            this.destinationPath('src/scripts/actions/base.js')
        );
        this.fs.copy(
            this.templatePath('src/scripts/actions/count.js'),
            this.destinationPath('src/scripts/actions/count.js')
        );
        this.fs.copy(
            this.templatePath('src/scripts/actions/square.js'),
            this.destinationPath('src/scripts/actions/square.js')
        );

        // mutations
        this.fs.copy(
            this.templatePath('src/scripts/mutations/index.js'),
            this.destinationPath('src/scripts/mutations/index.js')
        );
        this.fs.copy(
            this.templatePath('src/scripts/mutations/count.js'),
            this.destinationPath('src/scripts/mutations/count.js')
        );
        this.fs.copy(
            this.templatePath('src/scripts/mutations/square.js'),
            this.destinationPath('src/scripts/mutations/square.js')
        );

        // components
        this.fs.copy(
            this.templatePath('src/scripts/components/Counter.vue'),
            this.destinationPath('src/scripts/components/Counter.vue')
        );

        // views
        this.fs.copy(
            this.templatePath('src/scripts/views/index.vue'),
            this.destinationPath('src/scripts/views/index.vue')
        );
        this.fs.copy(
            this.templatePath('src/scripts/views/counter.vue'),
            this.destinationPath('src/scripts/views/counter.vue')
        );
        this.fs.copy(
            this.templatePath('src/scripts/views/square.vue'),
            this.destinationPath('src/scripts/views/square.vue')
        );
        this.fs.copy(
            this.templatePath('src/scripts/views/help.vue'),
            this.destinationPath('src/scripts/views/help.vue')
        );

        this.fs.copy(
            this.templatePath('src/images/favicon.ico'),
            this.destinationPath('src/images/favicon.ico')
        );

        this.fs.copy(
            this.templatePath('src/images/user.jpg'),
            this.destinationPath('src/images/user.jpg')
        );
    },

    install: function () {
        this.installDependencies({
            bower: false,
        });
    }
});
