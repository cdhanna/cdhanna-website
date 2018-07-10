		
var scrollHelper = (function(){
	var self = {};

	self.scrollFuncs = [];

	self.addOnScroll = function(func){
		self.scrollFuncs.push(func);
	};

	self.init = function(){
		var ball = document.querySelector('#scroller #line #ball');
		var scrollerLine = document.querySelector('#scroller #line');
		var scroller = document.querySelector('#scroller');

		var scrollerWidth = 50;
		scroller.style['width'] = scrollerWidth + '%';
		scroller.style['margin-left'] = (scrollerWidth/2) + '%';

		ball.style['margin-left'] = '1%';
		ball.style['margin-top'] = '-30px';

		var ballOn = function(){
			ball.style['margin-top'] = '-20px';
			domUtil.addClass(ball, 'active')
		};

		var ballOff = function(){
			if (ballDragMeta.dragging == false){
				console.log('removing class');
				ball.style['margin-top'] = '-30px';
				domUtil.removeClass(ball, 'active')
			}
		}

		var ballDragMeta = {
			dragging: false,
			position: 0
		};

		ball.addEventListener('mouseenter', function(){
			ballOn();
		});
		ball.addEventListener('mouseleave', function(){
			ballOff();
		});

		ball.addEventListener('mousedown', function(evt){
			ballDragMeta.dragging = true;
			ballOn();

			self.scrollFuncs.forEach(function(func){
				func(ballDragMeta);
			});
			// console.log(evt);
		});

		document.addEventListener('mouseup', function(evt){

			if (ballDragMeta.dragging == false)
				return;

			ballDragMeta.dragging = false;
			ballOff();

			var ticks = 100 / 5;
			var snap = Math.round(ballDragMeta.position / ticks);
			
			console.log(snap * ticks);

			var ratio = snap * ticks;
			ratio *= ( (scrollerWidth-2) / 100);
			ballDragMeta.position = snap * ticks;
			// console.log(ballDragMeta.position);
		})

		document.addEventListener('mousemove', function(evt){
			if (ballDragMeta.dragging == false)
				return;
			var lineBox = scrollerLine.getBoundingClientRect();
			var lineLeft = lineBox.left;
			var lineRight = lineBox.right;

			var ratio = (evt.clientX - lineLeft) / lineBox.width;

			ratio *= ( (scrollerWidth-2) / 100);
			ratio *= 100;
			ratio = Math.min( Math.max( 1, ratio), scrollerWidth-2);


			ballDragMeta.position = (ratio / (scrollerWidth-2)) * 100;
			ball.style['margin-left'] = ratio + '%';

			// self.scrollFuncs.forEach(function(func){
			// 	func(ballDragMeta);
			// });

		});
	};

	return self;

})();
