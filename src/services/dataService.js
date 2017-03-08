const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1'
});
const docClient = new AWS.DynamoDB.DocumentClient();

function loginFacebook() {
    
}

function setAWSCredentials(accessToken) {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:beb88bf7-8d69-40dc-9c96-5508fa0a40c7',
    Logins: {
      'graph.facebook.com': accessToken
    }
  });
}

function getAllNewsSites() {
  console.log('enter get all news')
  const params = {
    TableName: 'siteTable'
  };

  return docClient.get(params).promise();
}

export {
  getAllNewsSites
}
