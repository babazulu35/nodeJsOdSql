function testOrm(){

	this.method_1 = function(){
		console.log("method1");
		return this;
	};

	this.method_2 = function ()
	{
		consolole.log("methos2");
		return this;
	}

}

module.exports = new testOrm();