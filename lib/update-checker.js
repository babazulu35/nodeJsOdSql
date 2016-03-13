/**
 * @author  Hakan Huriyet
 */
var fs = require("fs");

function UpdateCheck()
{

	var self = this;
	

}

UpdateCheck.prototype.openUpdateOdbc = function (db,connection,fileName)
{
	var self = this;
	db.open(connection,function(err) {
		if(err) {
			return console.log(err);
		}

		setInterval(function() {
			self.odbcUpdateQuery(db,fileName);
		},1000);

	});
}

/**
 * [odbcUpdateQuery description]
 * @param  {[type]} dbs      [description]
 * @param  {[type]} fileName [description]
 * @return {[type]}          [description]
 */
UpdateCheck.prototype.odbcUpdateQuery = function (dbs,fileName)
{
	/**
	 * Get The Last Update Time From  Mssql Table
	 */
	var self = this;
	
		dbs.query("SELECT last_user_update FROM sys.dm_db_index_usage_stats WHERE (object_id = OBJECT_ID('AGENT_STATUS'))",function (err,rows,moreResults){

			if(err)
			{
				return console.log(err);
			}	

			self.readfile(fileName,self.getUpdateTime(rows[0]));	

		});


}

/**
 * [Parse your Data]
 * @param  {[object]} updateTime [the last update time]
 * @return {[string]}            [Get the time result as string in spesific format like => etc.13:55:00]
 */

UpdateCheck.prototype.getUpdateTime = function(updateTime)
{
	var self = this;

	var gettime = String(updateTime.last_user_update).split(" ");
	return gettime[4];
}
/**
 * [readfile description]
 * @param  {[string]} fileName [your filename]
 * @param  {[string]} time     [came from line .43]
 */
UpdateCheck.prototype.readfile = function(fileName,time)
{
	var self = this;
	var TXT = '.txt';

	 fs.readFile(fileName + TXT ,'utf8',function (err,data){

			 	if(data !== time)
			 	{
			 					 		
			 		self.writefile(fileName + TXT,time);
			 	}
			 	else
			 	{
			 		console.log("Değişiklik Yoktur");
			 		
			 	}

			 });

}

/**
 * [Write Your File and set the time inside]
 * @param  {[string]} fullFileName [its your full filename etc. filename.txt]
 * @param  {[string]} time         [description]
 * @return {[console.log]}         [Your success text]
 */
UpdateCheck.prototype.writefile = function (fullFileName,time)
{
	var self = this;
	fs.writeFile(fullFileName,time,function(err) {
		console.log("Update");
	});
}


module.exports = new UpdateCheck();

