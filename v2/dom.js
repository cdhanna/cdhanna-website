var moduleDom = (function(){
	var self = this;


	self.classed = function(elem, className, has){
		console.log(elem, elem.className);

		var dotClass = '.' + className + ' ';
		// elem.className = elem.className.replace(dotClass, has == true ? dotClass: '')
		elem.classList.toggle(className, has)

	}

	self.select = function(querySelector){

		var elList = document.querySelectorAll(querySelector);
		return Array.prototype.slice.call(elList, 0);

	}

	return this;
})();