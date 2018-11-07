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

/******* Split string to 2d array [[team1, score1, team2, score2],...] ********/
const splitFile = input => {
  return input.split('\n').map(game => {
    const splitGame = game
      .replace(',', '')
      .split(/(\d+)/)
      .filter(Boolean);
    splitGame[0] = splitGame[0].trim();
    splitGame[2] = splitGame[2].trim();
    return splitGame;
  });
};



module.exports = { readFile, splitFile };
