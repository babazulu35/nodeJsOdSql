# nodeJsOdSql
Node JS Odbc and Mysql Together
# What is this
Server side nodejs app listen the data on  odbc if is updated send the odbc datasets and parse it in mysql table
#Odbc Centos Setup
 ODBC.ini /etc 
[MyDSN]
Description=my dsn
Driver=TDS
Database=R****s
Servername=myServerName
[SQLServer]
Driver = TDS
Description = ODBC Connect via FreeTDS
Trace = Yes
TraceFile = /tmp/sqlserver
Servername = SQLServer
Database = R****s
Port = 1**3 

Odbcinst.ini /etc
[PostgreSQL]
Description = ODBC for PostgreSQL
Driver      = /usr/lib/psqlodbc.so
Setup       = /usr/lib/libodbcpsqlS.so
Driver64    = /usr/lib64/psqlodbc.so
Setup64     = /usr/lib64/libodbcpsqlS.so
FileUsage   = 1

[MySQL]
Description = ODBC for MySQL
Driver      = /usr/lib/libmyodbc5.so
Setup       = /usr/lib/libodbcmyS.so
Driver64    = /usr/lib64/libmyodbc5.so
Setup64     = /usr/lib64/libodbcmyS.so
FileUsage   = 1

AND TDS

[TDS]
Description = FreeTDS Driver
Driver = /usr/lib64/libtdsodbc.so
Setup=/usr/lib64/libtdsS.so
UsageCount = 1