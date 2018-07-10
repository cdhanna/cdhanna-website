var moduleBox = (function(){
	var self = {};

	var dom = moduleDom;
	if (!dom)
		throw "box module needs dom module to run."


	self.renderAll = function(){
		
		// var all = dom.select('.box:not(.box-rendered)');
		// all.forEach(function(box) {
		// 	console.log(box)


		// 	var wrapper = document.createElement('div');
		// 	dom.classed(wrapper, 'box-wrapper', true);

		// 	var contentHTML = box.innerHTML;

		// 	wrapper.innerHTML = contentHTML;
		// 	box.innerHTML = '';
		// 	box.appendChild(wrapper);

		// 	dom.classed(box, 'box-rendered', true);

		// });


	}


	self.renderAll();

	return self;
})();