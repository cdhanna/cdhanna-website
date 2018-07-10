var ground = function(){
	var self = {};




	function GroundObject(){
		var self = this;

		this.radius = 0;
		this.outterDiv = undefined;
		this.innerDiv = undefined;
		this.width = 0;
		this.height = 0;
		this.angle = 0;

		this.omega = 0;
		this.alpha = 0;
		this.friction = 0;

		this.update = function(dt){
			self.omega += self.alpha;
			self.omega -= self.omega * self.friction;
			self.angle += self.omega;
			self.alpha = 0;
		}

		this.draw = function(delay){
			var x = 0;
			var y = -world.diameter/2 - self.height/2 - self.radius;

			self.innerDiv 
				.transition()
				.duration(delay)
				.style('transform', 'rotate('+(self.angle+world.angle)+'deg)translate(' + x + 'px, ' + y + 'px)')
		}

		this.asImage = function(src){
			self.innerDiv
				.style('background-color', 'rgba(0,0,0,0)')
				.append('img')
				.attr('src', src)
				.attr('width', self.width + 'px')
				.attr('height', self.height + 'px')
		}
	}

	self.make = function(angle, radius, width, height){
		var obj = new GroundObject();


		var body = d3.select('#planet');

		obj.outterDiv = body.append('div');


		// var width = 100;
		// var height = 100;
		radius = radius || 0;
		width = width || 100;
		height = height || 100;


		obj.width = width;
		obj.height = height;
		obj.radius = radius;
		obj.angle = angle;

		var x = 0;
		var y = -world.diameter/2 - height/2 - radius;

		obj.outterDiv
			.style('position', 'absolute')
			.style('left', '50%')
			// .style('top', '50%')
			.style('top', (planet.style('height').replace('px', '')/2) + 'px')

		obj.innerDiv = obj.outterDiv.append('div')
			.style('background-color', 'blue')
			.style('position', 'relative')
			.style('left', -width/2 + 'px')
			.style('top', -height/2 + 'px')
			.style('width', width + 'px')
			.style('height', height + 'px')

			.style('transform', 'rotate('+angle+'deg)translate(' + x + 'px, ' + y + 'px)')

		// .style('z-index', 10)

		return obj;
	}

	return self;
}();