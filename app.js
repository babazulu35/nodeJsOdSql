/**
 * @author  Hakan Huriyet
 */
var sets = require("./lib/update-checker.js");
var watch = require("./lib/watch-update.js");
var db = require("odbc")()
 	, cn = "DRIVER={TDS};DSN=SQLServer;UID=sa;PWD=Al*******;DATABASE=R*****";

var mysql = require("mysql");


watch.listenUpdate(db,cn);
sets.openUpdateOdbc(db,cn,'lastUpdate');

