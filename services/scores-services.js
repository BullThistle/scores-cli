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

/********************** Create hash from teams and scores *********************/
const createHash = arr => {
  const hash = {};
  arr.forEach(line => {
    if (!hash[line[0]]) hash[line[0]] = 0;
    if (!hash[line[2]]) hash[line[2]] = 0;
    if (Number(line[1]) > Number(line[3])) {
      hash[line[0]] += 3;
    } else if (Number(line[1]) === Number(line[3])) {
      hash[line[0]] += 1;
      hash[line[2]] += 1;
    } else if (Number(line[1]) < Number(line[3])) {
      hash[line[2]] += 3;
    }
  });
  return hash;
};

/******************* Sort hash by score then alphabetically *******************/
const sortHash = hash => {
  const sortedHash = {};
  const sortedKeys = Object.keys(hash).sort((a, b) => {
    if (hash[a] > hash[b]) return -1;
    if (hash[a] < hash[b]) return 1;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  sortedKeys.forEach(team => {
    sortedHash[team] = team;
    sortedHash[team] = hash[team];
  });
  return sortedHash;
};

/************************ Format hash to string output ************************/
const formatOutput = (hash, reverse) => {
  let result = '';
  if (reverse) {
    const arr = [];
    for (let key in hash) {
      arr.push(key);
    }
    for (let count = arr.length - 1; count >= 0; count--) {
      result += `${count + 1}. ${arr[count]}, ${hash[arr[count]]} pts\n`;
    }
  } else {
    let count = 1;
    for (let team in hash) {
      result += `${count}. ${team}, ${hash[team]} pts\n`;
      count++;
    }
  }
  return result;
};

/******************* Read file and print calculated scores ********************/
const printScores = async (file, reverse) => {
  try {
    const input = await readFile(file);
    const splitInput = splitFile(input);
    const hash = createHash(splitInput);
    const sortedHash = sortHash(hash);
    return formatOutput(sortedHash, reverse);
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = {
  readFile,
  splitFile,
  createHash,
  sortHash,
  formatOutput,
  printScores
};
