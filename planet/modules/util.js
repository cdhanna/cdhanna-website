var util = function(){
	var self = this;

	self.range = function(number, func){
		var result = [];
		for (var i = 0 ; i < number ; i ++){
			result.push(func(i));
		}
		return result;
	}

	return self;
}();