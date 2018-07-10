var content = function(){
	var self = {};

	self.getAll = function(){
		return dom.selectAll('.content-wrapper').map(function(node){
			return {
				wrapper: node,
				content: node.children[0],
				angle: Number(node.getAttribute('angle'))
			}
		});
	}



	self.refresh = function(){

		var all = self.getAll();
		all.forEach(function(box){

			console.log(box)

			var x = 0;
			var y = -pCircleInfo.diameter/2 - 150;

			d3.select(box.content)
				.style('transform-origin', '50% 50%')
				.style('transform', 'rotate(' + box.angle + 'deg)translate(' + x + 'px, ' + y +'px)')

		});

	}


	return self;
}();

content.refresh();

