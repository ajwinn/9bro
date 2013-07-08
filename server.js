var connect = require('connect');
connect.createServer(
//	connect.static(__dirname)
	connect.static(process.cwd())
)
.use(connect.logger('dev'))
.listen(8000);
