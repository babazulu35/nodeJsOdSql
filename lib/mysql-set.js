var mysql = require("mysql");

function MysqlSet()
{
	var self = this;
	self.MyConnect = mysql.createConnection({
			host : '0.0.0.0',
			user : 'root',
			password : 'mar*****',
			database : 'mobil****'
 		});


}


MysqlSet.prototype.getOp = function (value,callback)
{
	var self = this;
	
					
			self.MyConnect.query("SELECT * FROM session WHERE session_id = '"+ value['session_id'] +"'",function(err,result) {

			if(!err)
				{
				callback(value,err,result);			
	 			}	
			});
}
		
MysqlSet.prototype.closeConnection = function (ids,callback)
{
	//console.log(ids['session_id']);

	var self = this;
	// if sıfır ise kısımına yap
	
	var ends = "DELETE FROM session WHERE ";
	ends += "session_id <> " + ids[0]['session_id'];
	//console.log(ids.length);
	for(var sa = 1; sa < ids.length ; sa++)
	{
		
		
		if(ids.length > 1)
		{
			ends += " AND session_id <> " + ids[sa]['session_id'];
			
		}
		
	}

	
		self.MyConnect.query(ends,function (err,res) {

		return callback(ids,err);
	
	});
	
}

MysqlSet.prototype.redirectOperator = function()
{

}

MysqlSet.prototype.updateData = function(updates,callback)
{
	var self = this;

	console.log(updates['op_id']);

	self.MyConnect.query("UPDATE session SET op_id='"+ updates['op_id'] +"',pass='"+ updates['pass']+"' WHERE session_id = '"+ updates['session_id']+"' ",function(err,result){

		console.log("Update Successfull");

	});

}

MysqlSet.prototype.insertTheData = function(datas,callbacks)
{
	var self = this;
	//console.log(datas);
		self.MyConnect.query("INSERT INTO session SET ?",datas,function(err,result) {

			if(!err)
			{
			callbacks(datas,result);
			}
		});	
}

module.exports = new MysqlSet();
