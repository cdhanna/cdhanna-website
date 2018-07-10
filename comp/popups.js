var popupHelper = (function(){
	var self = {};

	self.doPopup = function(popup){
		console.log(popup);

		// domUtil.addClass(popup, 'shown')


		var triggerSelector = domUtil.attr(popup, 'trigger') || '';
		var triggerNodes = domUtil.select(triggerSelector);
		triggerNodes.forEach(function(trigger){
			trigger.addEventListener('click', function(evt){
				domUtil.toggleClass(popup, 'shown');
				domUtil.toggleClass(trigger, 'active');
				evt.stopPropagation();
			});
		});

		document.querySelector('body').addEventListener('click', function(){
			domUtil.removeClass(popup, 'shown');
			triggerNodes.forEach(function(trigger) {
				domUtil.removeClass(trigger, 'active');
			});
		});

		popup.addEventListener('click', function(evt){
			evt.stopPropagation();
		})

		var width = domUtil.attr(popup, 'width') || 'auto';
		var height = domUtil.attr(popup, 'height') || 'auto';
		var left = domUtil.attr(popup, 'left') || 'auto';
		var top = domUtil.attr(popup, 'top') || 'auto';

		popup.style['left'] = left + 'px';
		popup.style['top'] = top + 'px';
		popup.style['width'] = width + 'px';
		// popup.style['transform'] = 'rotate(30deg)'

	}

	self.doAll = function(){
		domUtil.select('popup').forEach(self.doPopup);
	}

	return self;
})();