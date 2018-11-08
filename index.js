#!/usr/bin/env node
'use strict';

const program = require('commander');
const { printScores } = require('./services/scores-services.js');

/******************************* Test readFile ********************************/
const scoresCLI = (args, revFlag) => {
  return new Promise(function (resolve) {
    program
      .version('0.0.1', '-v, --version')
      .usage('[options] file')
      .option('-r, --reverse', 'Print scores in reverse order')
      .action(async file => {
        if (revFlag) program.reverse = true;
        const result = await printScores(file, program.reverse);
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
