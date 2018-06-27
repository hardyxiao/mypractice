'use strict';

/*console.log(100+200);*/

var s = 'Hello';

function greet(name)
{
	console.log(s + ',' + name + '!');
}

function hello()
{
	console.log('hello world!');
}

module.exports = {greet,hello};