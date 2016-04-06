var ddb = require('dynamodb').ddb({accessKeyId: '', secretAccessKey: ''});

// console.log(ddb);

ddb.listTable((), function(err, red){
	console.log(res);
});

ddb.describeTable('April8', function(err, res){
	console.log(res);
});