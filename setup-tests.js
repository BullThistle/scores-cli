global.logOutput;
const storeLog = inputs => (logOutput = inputs);
console['log'] = jest.fn(storeLog);
