#!/usr/bin/env node

const { exec } = require('child_process');

const promisifiedExec = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, _stderror) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
};

module.exports = promisifiedExec;
