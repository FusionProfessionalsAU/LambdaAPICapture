'use strict';
var AWS = require('aws-sdk');
var crypto = require('crypto');
var s3 = new AWS.S3();

function uploadFileOnS3(bucket, fileName, fileData){
    var params = {
      Bucket: bucket,
      Key: fileName,
      Body: fileData
    };
    s3.upload(params, function (err, res) {               
        if(err)
            console.log("Error in uploading file on s3 due to "+ err)
        else    
            console.log("File successfully uploaded.")
    });
}

exports.handler = function(event, context, callback) {
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    var filename = crypto.createHash('sha1').update(current_date + random).digest('hex') + ".json";

    uploadFileOnS3(process.env.s3location + event.type, filename, JSON.stringify(event.payload));
    
    callback(null, {"message" : "Successful"});
};