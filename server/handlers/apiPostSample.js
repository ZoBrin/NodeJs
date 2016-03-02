'use strict';
//the url path to be used for this handler
exports.path='/PostSample';

//the http verb to be used for this handler
exports.verb='POST';

//handler business logic
exports.handleRequest=[handler];


function handler (req, res, next) {

    console.log('handling ' + JSON.stringify(req.route.methods) + ' ' + req.originalUrl + ' from:' + req.header('referer'));

    var bodyData = req.body.sampleData.firstName;
    req.headers
    res.status(200).json({message:bodyData});
};