'use strict';

/*
//koa是一种web开发框架
//导入koa,koa2中，导入的是一个class，用大写的Koa
const Kos = require('koa');

//创建一个Koa对象表示web app本身
const app = new Koa();

//对于任何请求，app将调用该异步函数处理请求
app.use(async(ctx,next)=>{
	//处理下一个异步函数
	await next();
	//设置响应type
	ctx.response.type = 'text/html';
	//设置响应内容
	ctx.response.body = '<h1>hello koa2!</h1>';
});

//监听端口3000：
app.llisten(3000);
console.log('app started at port 3000...');
*/

/*
//上述koa的执行逻辑中，app.use()是核心代码，若有多个middleware分别处理不同的事：打印日志、记录时间、输出html
app.use(async(ctx,next)=>{
	console.log('${ctx.request.method} ${ctx.request.url}');//打印url
	await next(); //调用下一个middleware
});

app.use(async(ctx,next)=>{
	const start = new Date().getTime(); //当前时间
	await next();
	const ms = new Date().getTime() - start; //耗费时间
	console.log('Time: ${ms}ms');
});

app.use(async(ctx,next)=>{
	await next();
	ctx.response.tye = 'text/html';
	ctx.response.body = '<h1>hello koa2</h1>';
});
*/

/*
//对不同的url请求，调用不同的处理函数


//method 1
app.use(async(ctx,next)=>{
	if(ctx.request.path === '/'){
		ctx.response.body = 'index page';
	} else {
		await next();
	}
});

app.use(async(ctx,next)=>{
	if(ctx.request.path === '/test'){
		ctx.response.body = 'test page';
	}else{
		await next();
	}
});

......



//method1 is ok,but not good; we can use koa-router which can invoking corresponding function to the different url
//method 2
const Koa = require('koa');

//notice: require('koa-router')返回的是函数
const router = require('koa-router')();  

const app = new Koa(); //创建对象

//log request url
app.use(async(ctx,next)=>{
	console.log('....');
	await next();
});

//add url-route, 处理get请求
router.get('/hello/:name',async(ctx,next)=>{
	var name = ctx.params.name;
	ctx.response.body = '<h1>hello koa2</h1>';
});

router.get('/',async(ctx,next)=>{
	ctx.response.body = '<h1>index</h1>';
});

...

//add router middleware
app.use(router.routes);

app.listen(3000);
console.log('app startde at port 3000...');
*/