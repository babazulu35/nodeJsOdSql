function RandomNumber()
{
	var self = this;
}

RandomNumber.prototype.createNumber = function (min,max)
{
	return Math.floor(Math.random() * (max-min) + min );
}

module.exports = new RandomNumber();