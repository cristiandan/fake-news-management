const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1'
});

function setAWSCredentials() {
  window.FB.getLoginStatus(function(response){
    console.log('got the configs', response.authResponse.accessToken);
    if (response.status === 'connected') {
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:beb88bf7-8d69-40dc-9c96-5508fa0a40c7',
        Logins: {
          'graph.facebook.com': response.authResponse.accessToken
        }
      });
    } else {
      console.error('not connected', response);
    }
  })
}

function getAllNewsSites() {
    setAWSCredentials();
    const docClient = new AWS.DynamoDB.DocumentClient();
    console.log('enter get all news')
    const params = {
      TableName: 'siteTable'
    };
    return docClient.scan(params).promise();
    
}

export {
  getAllNewsSites
}
