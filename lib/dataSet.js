

/*var Dataset = function () {}

Dataset.prototype.mysqlCons = function () {
	 
	 connection = function () {

	 	console.log("hakansasa");

	 };

	 return connection();

};

Dataset.prototype.aysan = function (names)
{
	console.log(names);
}

module.exports = new Dataset();*/
var mysql = require("mysql");

module.exports = {

	setSql : function() {
		var connection = mysql.createConnection({
			host : '0.0.0.0',
			user : 'root',
			password : 'mar*****',
			database : 'mob*****'
 		});
 		return connection;
	},
	getSql : function () {
		return this.setSql();
	},

	setQuery : function (query) {
		var Quer = query;
		return Quer;
	},
	getQuery : function (query) {
		this.getSql().query(this.setQuery(),function (err,rows) {
			console.log(rows);
		});
	}


}
