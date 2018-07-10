var dom = function(){
	var self = {};

	self.selectAll = function(selector){
		return [].slice.call(document.querySelectorAll(selector));
	}

	self.getStyleOf = function(node){
		return node.style
	}


	return self;
}();