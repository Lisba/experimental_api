#!/usr/bin/env node

const promisifiedExec = require('./promisifiedExec');

(async () => {
  try {
    let data1 = await promisifiedExec('git status');
    let data2 = await promisifiedExec(
      `echo '${data1}' > fileCreatedByLisba.txt && git log --oneline`
    );
    await promisifiedExec(`echo "${data2}" > anotherFile.txt`);
    console.log('data1: ', data1);
    console.log('data2: ', data2);
  } catch (error) {
    console.error('An error has been occurred!', error);
  }
})();
