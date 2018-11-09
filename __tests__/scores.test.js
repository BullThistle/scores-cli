const { scoresCLI } = require('../scores');

const testFile = '__tests__/__test-inputs__/test-input.txt';
process.exit = jest.fn();

describe('scoresCLI', function () {
  /********************************* Test CLI ***********************************/
  test('Formats string', async () => {
    await scoresCLI(['', '', testFile]);

    const expectedString =
      '1. Sounders, 6 pts' + '\n' +
      '2. Atlanta United, 3 pts' + '\n' +
      '2. Liverpool, 3 pts' + '\n' +
      '4. D.C. United, 1 pt' + '\n' +
      '4. Manchester, 1 pt' + '\n' +
      '4. Portland Timbers, 1 pt' + '\n' +
      '4. Toronto FC, 1 pt' + '\n' +
      '8. Chelsea, 0 pts' + '\n' +
      '8. Galexy, 0 pts' + '\n' +
      '8. Real Salt Lake, 0 pts' + '\n';

    expect(global.logOutput).toEqual(expectedString);
  });

  /************************* Test CLI with reverse tag **************************/
  test('reverses', async () => {
    console.log(testFile, 'reverse');

    const revFlag = true;
    await scoresCLI(['', '', testFile], revFlag);

    const expectedString =
      '8. Real Salt Lake, 0 pts' + '\n' +
      '8. Galexy, 0 pts' + '\n' +
      '8. Chelsea, 0 pts' + '\n' +
      '4. Toronto FC, 1 pt' + '\n' +
      '4. Portland Timbers, 1 pt' + '\n' +
      '4. Manchester, 1 pt' + '\n' +
      '4. D.C. United, 1 pt' + '\n' +
      '2. Liverpool, 3 pts' + '\n' +
      '2. Atlanta United, 3 pts' + '\n' +
      '1. Sounders, 6 pts' + '\n';

    expect(global.logOutput).toEqual(expectedString);
  });
});
