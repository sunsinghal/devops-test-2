const handler = require('../../lib/handler');

it('checks for latestCommitsha when callbackerror is null and data is not an empty object', () => {
    const data = {
        lastCommitSha: '3cc3643ed07d313f329cf3f35e0e5a455dff13c4'
    };
    const expectedResponse = {
        statusCode: 200,
        responseMessage: {
            myapplication: {
                version: '1.0',
                description: 'pre-interview technical test',
                lastCommitSha: '3cc3643ed07d313f329cf3f35e0e5a455dff13c4'
            }
        }
    };
    const actualResponse = handler(null, data);
    expect(actualResponse).toEqual(expectedResponse);
});

it('checks for NULL latestCommitsha when callbackerror is null and data is an empty object', () => {
    const data = {};
    const actualResponse = handler(null, data);
    const expectedResponse = {
        statusCode: 200,
        responseMessage: {
            myapplication: {
                version: '1.0',
                description: 'pre-interview technical test',
                lastCommitSha: 'NULL'
            }
        }
    }
    expect(actualResponse).toEqual(expectedResponse);
});

it('checks for NULL latestCommitsha when callbackerror is null and data is an empty string', () => {
    const actualResponse = handler(null, '');
    const expectedResponse = {
        statusCode: 200,
        responseMessage: {
            myapplication: {
                version: '1.0',
                description: 'pre-interview technical test',
                lastCommitSha: 'NULL'
            }
        }
    }
    expect(actualResponse).toEqual(expectedResponse);
});