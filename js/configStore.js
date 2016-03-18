// 生产环境不包含调试工具
if (process.env.NODE_ENV === 'production') {
	console.log("way 001");
	module.exports = require('./configStore.prod');
} else {
	console.log("way 002");
	module.exports = require('./configStore.dev');
}