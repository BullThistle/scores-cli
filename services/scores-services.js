const fs = require('fs');
const { promisify } = require('util');

/******************************* Test readFile ********************************/
const readFile = async filePath => {
  const readFileAsync = promisify(fs.readFile);
  try {
    const data = await readFileAsync(filePath, { encoding: 'utf8' });
    return data.slice(0, -1);
  } catch (err) {
    const msg =
      "The file you've entered either does not exist or can not be read";
    console.log(msg);
    return Promise.reject(new Error(msg));
  }
};

module.exports = { readFile };
