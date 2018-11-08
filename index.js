#!/usr/bin/env node
'use strict';

const program = require('commander');
const { printScores } = require('./services/scores-services.js');

/******************************* Test readFile ********************************/
const scoresCLI = args => {
  return new Promise((resolve) => {
    program
      .version('0.0.1', '-v, --version')
      .usage('[options] file')
      .action(async file => {
        const result = await printScores(file);
        resolve(console.log(result));
      })
      .parse(args);
  });
};

// Don't run scoresCLI during jest without being called
if (process.env.JEST_WORKER_ID === undefined) {
  const args = process.argv;
  scoresCLI(args);
}

module.exports = { scoresCLI };
