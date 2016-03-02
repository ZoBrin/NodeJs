/**
 * Created by zohar.brin on 2/29/2016.
 */
var request = require('request');
request('http://127.0.0.1:8081/readme', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
    }else{
        console.log(error);
    }
})