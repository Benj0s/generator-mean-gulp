'use strict'

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({

    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

    },

    /**
     * Prompt the user for the installation mode
     */
    getMode: function () {
        var done = this.async();
        // display the welcome message
        this.log(yosay(
            chalk.red('Welcome to mean-gulp!!\n') +
            chalk.yellow('This generator is a scaffolding for a MEAN stack built on Gulp')
        ));

        // create a prompt to ask the user which mode to use
        var prompts = [{
            type: 'list',
            name: 'mode',
            message: 'How would you like to install mean-gulp?',
            choices: [{
                name: 'Quick: Generate a project using default options',
                value: 'quick'
            },
            {
                name: 'Custom: Generate a project based on user defined options',
                value: 'custom'
            }]
        }];

        this.prompt(prompts, function (answer) {
            var mode = answer.mode;

            this.mode = mode;
            this.log('Mode choice = ' + this.mode);
            done();

        }.bind(this));

    }

});
