'use strict'

process.nextTick(function()
{
	console.log('nextTick callback!');
});

console.log('nextTick was set!');

/*
//异步读取文本文件
var fs = require('fs');

fs.readFile('new 1.txt','utf-8',function(err,data){
	if(err)
	{
		console.log(err);
	} else
	{
		console.log(data);
		//console.log(data.length + 'bytes'); //读取二进制文件时加上此句，回调函数返回一个buffer对象
	}
});
*/

/*
//buffer对象转string，buffer对象实际是一个包含任意字节的数组
var text = data.toString('utf-8');
console.log(text);

//string转buffer
var buf = Buffer.from(text,'utf-8');
console.log(buf);
*/

/*
//同步读文件

var fs = require('fs');
try{
var data = fs.readFileSync('new 1.txt','utf-8');  //结果直接返回了，不允许回调函数
console.log(data);
} catch(err){
	//如果同步读文件出错，使用try-catch捕捉
	//如果同步读文件出错，使用try-catch捕捉
}
*/

/*
//异步写入文件
var data = 'Hello hardyxiao';
fs.writeFile('output.txt',data,function(err)
{
	if(err){
		console.log(err);
	} else
	{
		console.log('ok.');
	}
}
);
*/

/*
//同步写入文件
var fs = require('fs');
var data = 'hello,hardyxiao';
fs.writeFileSync('output.txt',data);
*/