var boxHelper = (function(){
	var self = {};

	console.log('hello boxHelper');

	var boxes = document.querySelectorAll('box');
	boxes = Array.prototype.slice.call(boxes, 0);


	function getAttrs(box) {
		var attrs = {};
		attrs.x = box.getAttribute('x') || 0;
		return attrs;
	}

	boxes.forEach(function(box){
		box.innerHTML = '';
		var attrs = getAttrs(box);

		var style = box.style;
		style.width = '100px';
		style.height = '100px';
		style.display = 'inline-block';
		style.position = 'absolute';
		style.left = attrs.x + 'px';
		style['background-color'] = 'red';

	});

	return self;
}());