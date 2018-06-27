'use strict'

/*
//从文件流读取文本内容
var fs = require('fs');

//打开一个流
var rs = fs.createReadStream('sample.txt','utf-8');

rs.on('data',function(chunk){
	console.log('DATA:')
	console.log(chunk);
});

rs.on('end', function(){
	console.log('END');
});

rs.on('error',function(err){
	console.log('ERROR: '+ err);
});
*/

/*
//以流的形式写入文件，只需不断调用write()方法，最后以end()结束
var fs = require('fs');

//打开流
var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write(' string....   ');
ws1.write('END.');
ws1.end();

*/

/*
//管道pipe连接两个流

var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('output1.txt');

rs.pipe(ws); //数据读完后会自动关闭write流
// rs.pipe(ws,{end:false}); //the write stream will not be closed automatically
*/