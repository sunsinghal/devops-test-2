let handler = (err, data) => {
    if (err) {
        /*eslint-disable*/
	console.log(err);
	/*eslint-enable*/
        return {
            statusCode: 404,
            responseMessage: 'Error calculating last commit SHA, sending 404 status code'
        };
    } 

    let responseObj;
    if (data) {
        responseObj = {
            myapplication: {
                version: '1.0',
                description: 'pre-interview technical test',
                lastCommitSha: data
            }
        };
    } else {
        responseObj = {
            myapplication: {
                version: '1.0',
                description: 'pre-interview technical test',
                lastCommitSha: 'NULL'
            }
        };
    }
    return {
        statusCode: 200,
        responseMessage: responseObj
    };
};

module.exports = handler;

