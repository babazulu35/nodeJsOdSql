/**
 * @author  Hakan Huriyet
 */
var fs = require("fs");
var query = require("./odbc-query.js");
function WatchUpdate()
{
	var self = this;
}

WatchUpdate.prototype.listenUpdate = function (db,cn)
{

	fs.watchFile('lastUpdate.txt', function (curr, prev) {
 	 /*console.log('the current mtime is: ' + curr.mtime);
 	 console.log('the previous mtime was: ' + prev.mtime);*/ 
 	 
 	 query.startOdbcQ(db,cn);
 	 
});	
}

module.exports = new WatchUpdate();