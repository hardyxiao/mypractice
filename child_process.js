/* 
//child_process.exec()以子进程执行命令，之后缓存子进程输出，以回调函数参数形式返回
//nodejs多进程

//可以创建两个js文件

//support.js文件
//console.log("进程" + process.argv[2]+"执行");

//master.js文件
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++){
	var workprocess = child_process.exec('node support.js '+i,function(error,stdout,stderr){
		if(error){
			console.log(error.stack);
			console.log('Error code: '+error.code);
			console.log('Signal received: '+error.signal);
		}
		console.log('stdout: '+ stdout);
		console.log('stderr: '+ stderr);
	});
	
	workprocess.on('exit',function(code){
		console.log('子进程已退出，推出码：'+ code);
	});
}

*/

/*
//child_process.spawn()使用指定的命令行参数创建新进程
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++){
	var workprocess = child_process.spawn('node',['support.js',i]);
	
	workprocess.stdout.on('data',function(data){
		console.log('stdout: '+data);
		
	});
	
	workprocess.stderr.on('data',function(data){
		console.log('stderr: '+data);
	});
	
	workprocess.on('close',function(code){
		console.log('子进程已退出，退出码'+code);
	});
}
*/

/*
//child_process.fork()是上述spawn()的特殊形式，创建新进程
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++){
	var workprocess = child_process.fork('support.js',[i]);
	
	workprocess.on('close',function(code){
		console.log('子进程已退出，退出码： '+code);
	});
}
*/