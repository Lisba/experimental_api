#!/usr/bin/env node

const promisifiedExec = require('./promisifiedExec');

try {
  let data = promisifiedExec('rm fileCreatedByLisba.txt anotherFile.txt');
  if (data) {
    console.log('File removed successfully!');
  }
} catch (error) {
  console.error('An error has been occurred!', error);
}
