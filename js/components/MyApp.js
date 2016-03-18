// 生产环境不包含调试工具
if (process.env.NODE_ENV === 'production') {
	console.log("way 003");
	module.exports = require('./MyApp.prod');
} else {
	console.log("way 004");
	module.exports = require('./MyApp.dev');
}