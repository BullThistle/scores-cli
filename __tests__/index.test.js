const { scoresCLI } = require('../index');

const testFile = '__tests__/__test-inputs__/test-input.txt';
process.exit = jest.fn();

describe('scoresCLI', function () {
  /********************************* Test CLI ***********************************/
  test('Formats string', async function () {
    await scoresCLI(['', '', testFile]);

    const expectedString =
      '1. Sounders, 6 pts' + '\n' +
      '2. Atlanta United, 3 pts' + '\n' +
      '3. Liverpool, 3 pts' + '\n' +
      '4. D.C. United, 1 pts' + '\n' +
      '5. Manchester, 1 pts' + '\n' +
      '6. Chelsea, 0 pts' + '\n' +
      '7. Galexy, 0 pts' + '\n' +
      '8. Real Salt Lake, 0 pts' + '\n';

    expect(global.logOutput).toEqual(expectedString);
  });

  /************************* Test CLI with reverse tag **************************/
  test('reverses', async function () {
    console.log(testFile, 'reverse');

    const revFlag = true;
    await scoresCLI(['', '', testFile], revFlag);
    //prettier-ignore
    const expectedString =
      '8. Real Salt Lake, 0 pts' + '\n' +
      '7. Galexy, 0 pts' + '\n' +
      '6. Chelsea, 0 pts' + '\n' +
      '5. Manchester, 1 pts' + '\n' +
      '4. D.C. United, 1 pts' + '\n' +
      '3. Liverpool, 3 pts' + '\n' +
      '2. Atlanta United, 3 pts' + '\n' +
      '1. Sounders, 6 pts' + '\n';
    expect(global.logOutput).toEqual(expectedString);
  });
});