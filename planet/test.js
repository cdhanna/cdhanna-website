console.log('hello', d3)



var planet = d3.select('#planet');
planet.style('position', 'absolute')

var view = {
	zoom: 1.5,
	angle: 0,
	horizon: 1400
}
var world = {}
world = {
	diameter: 1500,
	// zoom: 1.5,
	angle: 0,
	// horizon: 1400,
	omega: 0,
	// alpha: 0,

	update: function(){
		world.angle += world.omega;
	},



}

var pCircleWrapper = planet.append('div')
	.attr('id', 'circleWrapper')
	.style('position', 'absolute')
	.style('left', '50%')
	// .style('bottom', '0%')

var pCircle = pCircleWrapper.append('div')
	.attr('id', 'circle')
	.style('background-color', '#636363')

	.style('position', 'relative')
	.style('left', '-50%')
	.style('top', (planet.style('height').replace('px', '')/2) - (world.diameter/2)+ 'px')
	// .style('top', world.diameter/2 + 'px')
	// .style('top', (1.4 * pCircleInfo.diameter/2) + 'px')

	.style('width', world.diameter + 'px')
	.style('height', world.diameter + 'px')
	.style('border-radius', world.diameter/2 + 'px')


function refreshView(delay){
	d3.select('body')
		.transition()
		.duration(delay)
		.style('transform', '' 
			+ 'translate(0, '+view.horizon+'px)' 
			+ 'rotateZ('+view.angle+'deg)'
			+ 'scale('+view.zoom+')'
			) 
		// .style('transform', 'rotate('+world.angle+'deg)translate(0, '+world.horizon+'px)scale('+world.zoom+')')
}


// function getWorldPosition(angle, extraHeight, width, height){
// 	var body = d3.select('#planet');

// 	var spot = body.append('div');

// 	// var width = 100;
// 	// var height = 100;
// 	width = width || 100;
// 	height = height || 100;


// 	var x = 0;
// 	var y = -world.diameter/2 - height/2 - extraHeight;

// 	spot
// 		.style('position', 'absolute')
// 		.style('left', '50%')
// 		// .style('top', '50%')
// 		.style('top', (planet.style('height').replace('px', '')/2) + 'px')

// 	var innard = spot.append('div')
// 		.style('background-color', 'blue')
// 		.style('position', 'relative')
// 		.style('left', -width/2 + 'px')
// 		.style('top', -height/2 + 'px')
// 		.style('width', width + 'px')
// 		.style('height', height + 'px')

// 		.style('transform', 'rotate('+angle+'deg)translate(' + x + 'px, ' + y + 'px)')

// 		// .style('z-index', 10)

// 	return innard;
// }

