var domUtil = (function(){
	var self = {};

		self.select = function(query){
			var selection = document.querySelectorAll(query);
			selection = Array.prototype.slice.call(selection, 0);
			return selection;
		}

		self.removeClass = function(node, className){
			var paddedClassName = ' ' + className + ' ';
			node.className = node.className.replace(paddedClassName, ' ');	
		}
		self.addClass = function(node, className){
			var paddedClassName = ' ' + className + ' ';
			if (node.className.indexOf(paddedClassName) >= 0)
				return;
			node.className += paddedClassName;	
		}
		self.toggleClass = function(node, className){
			var paddedClassName = ' ' + className + ' ';
			if (node.className.indexOf(paddedClassName) >= 0){
				self.removeClass(node, className);
			} else {
				self.addClass(node, className);
			}
		}

		self.attr = function(node, attrName) { 
			return node.getAttribute(attrName) || undefined;
		}

	return self;
})();