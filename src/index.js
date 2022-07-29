import { __templatedir } from './utils/path.js';

import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';

const vue = chalk.hex('#3fb27f');

console.log(vue(figlet.textSync('Tempest', {
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
})));

const questions = [
  {
    name: 'technology',
    type: 'list',
    message: 'What technology would you like to create a project with ?',
    choices: [
      'vue',
      'ABP Framework'
    ]
  },
  {
    name: 'version',
    type: 'list',
    message: 'What version would you like to use ?',
    choices: [
      '3',
      '2'
    ]
  },
  {
    name: 'name',
    type: 'input',
    message: 'Project name:'
  },
  {
    name: 'options',
    type: 'checkbox',
    message: 'Enable options',
    choices: [
      'examples',
      'comments',
      'typescript ?'
    ]
  },
  {
    name: 'features',
    type: 'checkbox',
    message: 'Select the features to be implemented',
    choices: [
      'store',
      'layout',
      'http wrapper',
      'web services',
      'user authentication',
      'internationalization',
    ]
  }
];

inquirer
  .prompt(questions)
  .then(answers => console.log(answers))