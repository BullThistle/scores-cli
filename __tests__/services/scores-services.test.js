const { readFile, splitFile, createHash, sortHash } = require('../../services/scores-services');

/******************************* Test readFile ********************************/
test('Reads from .txt file and returns its contents as a string', async () => {
  const returnedString = await readFile(
    '__tests__/__test-inputs__/test-input.txt'
  );

  const expectedString =
    'Sounders 3, Chelsea 2' + '\n' +
    'Liverpool 11, Galexy 3' + '\n' +
    'Manchester 3, D.C. United 3' + '\n' +
    'D.C. United 3, Atlanta United 25' + '\n' +
    'Real Salt Lake 1, Sounders 2';

  expect(returnedString).toEqual(expectedString);
});

/******************************* Test splitFile *******************************/
test('Creates properly formatted 2d array from input string', () => {
  const inputString =
    `Sounders 3, Chelsea 2
    Liverpool 11, Galexy 3
		Manchester 3, D.C. United 3
    D.C. United 3, Atlanta United 25
    Real Salt Lake 1, Sounders 2`;

  const expectedArray = [
    ['Sounders', '3', 'Chelsea', '2'],
    ['Liverpool', '11', 'Galexy', '3'],
    ['Manchester', '3', 'D.C. United', '3'],
    ['D.C. United', '3', 'Atlanta United', '25'],
    ['Real Salt Lake', '1', 'Sounders', '2']
  ];

  expect(splitFile(inputString)).toEqual(expectedArray);
});

/****************************** Test createHash *******************************/
test('Creates hash of teams from calculated points', () => {
  const teamsAndScores = [
    ['Sounders', '3', 'Chelsea', '2'],
    ['Liverpool', '11', 'Galexy', '3'],
    ['Manchester', '3', 'D.C. United', '3'],
    ['D.C. United', '3', 'Atlanta United', '25'],
    ['Real Salt Lake', '1', 'Sounders', '2']
  ];


  const expectedHash = {
    'Atlanta United': 3,
    'Chelsea': 0,
    'D.C. United': 1,
    'Galexy': 0,
    'Liverpool': 3,
    'Manchester': 1,
    'Real Salt Lake': 0,
    'Sounders': 6
  };

  expect(createHash(teamsAndScores)).toEqual(expectedHash);
});

/******************************* Test sortHash ********************************/
test('Sorts hash by scores then alphabetically by team', () => {
  const unsortedHash = {
    'Atlanta United': 3,
    'Chelsea': 0,
    'D.C. United': 1,
    'Galexy': 0,
    'Liverpool': 3,
    'Manchester': 1,
    'Real Salt Lake': 0,
    'Sounders': 6
  };

  // Stringify to ensure that the order is correct
  let expectedHash = JSON.stringify({
    'Sounders': 6,
    'Atlanta United': 3,
    'Liverpool': 3,
    'D.C. United': 1,
    'Manchester': 1,
    'Chelsea': 0,
    'Galexy': 0,
    'Real Salt Lake': 0
  });

  expect(JSON.stringify(sortHash(unsortedHash))).toEqual(expectedHash);
});