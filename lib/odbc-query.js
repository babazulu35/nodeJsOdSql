/**
 * @author  Hakan Huriyet
 */
var myquery = require("./mysql-set.js");
var random = require("./random-number.js");
function OdbcQuery()
{
	var self = this;
}

OdbcQuery.prototype.startOdbcQ = function(db,con)
{
	var self = this;
	self.openOdbcConection(db,con);
}


OdbcQuery.prototype.openOdbcConection = function(db,con)
{
	var self = this;
	db.open(con,function(err) {
		if(err) {
			return console.log(err);
		}

		// Start GetQuery Prototype
		self.getQuery(db,function(cb,err) {
			myquery.closeConnection(cb,function(res,err) {
			if(!err)
			
			{
				console.log("#############################################################");
				console.log(res.length);
				for(rp = 0 ; rp < res.length ; rp++ )
				{
					console.log(res[rp]['session_id'])
				myquery.getOp(res[rp],function(calb,error,resultas) {

					//console.log("Bu Get Op Prototypın Sonucu:");
					if(resultas.length === 0)
					{
						
						//console.log("Insert Edildi");
						myquery.insertTheData(calb,function(callbacks,results) {
						//console.log(callbacks);
						});
					}
					else
					{
						// result.pass ile update edeceğiz.
						/*console.log("Mevcut Şifresi : ");
						console.log(resultas[0]['pass']);
						console.log(calb['session_id']);*/
						var dataSets = {op_id: calb['op_id'], session_id: calb['session_id'], pass: resultas[0]['pass']};
						myquery.updateData(dataSets,function() {
					

						});

						
					}
					//console.log(calb);

				});
			  }
			}
		});
		});
		// GetQuery Prototype Call End

	});
}

OdbcQuery.prototype.getQuery = function(dbs,callback)
{
	dbs.query("SELECT * FROM AGENT_STATUS WHERE status!='BEKLEMEDE' AND USERNAME>=8000" ,function(err,rows,more){

	var data = [];	
	var time = "";
	
		for(i = 0 ; i < rows.length; i++)
		{
			 
     		var rowa = rows[i];
     		console.log("Respustan Gelen Op:");
     		console.log(rowa.USERNAME + " || " + rowa.CALL_ID + "-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-");
			var madHash = random.createNumber(10000,99999);
			var opData = {session_id: rowa.CALL_ID,op_id: rowa.USERNAME,pass: madHash}; 
			var all = data.push(opData);
	
			if(i === rows.length -1)
			{
				callback(data,err);
			}
						
 
		}
		

					

		//console.log(data);

		/*myquery.insertTheData(data,time,function(cb) {

		});
		*/

	});
}


module.exports = new OdbcQuery();