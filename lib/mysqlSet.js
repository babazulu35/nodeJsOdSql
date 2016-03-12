module.exports = MysqlSet;

var mysql = require("mysql");

function MysqlSet(table)
{
	var self = this;
	self.MyConnect = mysql.createConnection({
			host : '0.0.0.0',
			user : 'root',
			password : 'mar****',
			database : 'mobil****'
 		});

	self.table = table;
	self.error = [];
}

function table(table)
{
	var self = this;
	self.tables = table;
}




MysqlSet.prototype.result = function ()
{

	var self = this;

	console.log(self.tables);

	self.MyConnect.query(query,function(err,rows){
		
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log(rows);
			self.fetchAll(rows);
		}

		
		self.conClose(self.MyConnect);	

	});


}

MysqlSet.prototype.conClose = function (connection)

{
	var self = this;
	connection.end();
}

MysqlSet.prototype.fetchAll = function(results)
{
	var self = this;

	console.log(results);

}

MysqlSet.prototype.where = function(params )
{
	console.log(typeof params);
}

MysqlSet.prototype.get = function ()
{

}
