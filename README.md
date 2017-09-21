# Lambda Api Json Data Catcher

## Policies Required

	* S3
	
	* Lambda
	
	* API Gateway
	
	* Logs/CloudWatchLogs

## Create a Lambda function and add the code

	set the environment variable:

		`s3location = bucket/folder/ (Where youll store the data)`
	
## Setup AWS API Gateway and add this to refer to AWS Guides

## Seperate input types by changing the post JSON body `type` field and data must always be in the `payload` field.

eg.

	{
		"type": "2",
		"payload":{
			"val1":"1",
			"val2":"2"
		}
	}	