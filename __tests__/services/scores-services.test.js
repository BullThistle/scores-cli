const { readFile, splitFile } = require('../../services/scores-services');

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