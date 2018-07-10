var panelHelper = (function(){
	var self = {};



	self.doPanel = function(panel){
		var styles = panel.style;

		console.log(panel);

		// panel.innerHTML = 'Tuna fish!';

		var angle = domUtil.attr(panel, 'angle') || 0;
		var width = domUtil.attr(panel, 'width') || 'auto';
		var height = domUtil.attr(panel, 'height') || 'auto';
		styles['transform'] = 'rotate('+angle+'deg)';
		styles['width'] = width;
		styles['height'] = height;


		var html = panel.innerHTML;
		// setTimeout(function(){
			panel.innerHTML = '<div class="panel-content">' + html + '</div>';
			
		// }, 0)
	}

	self.doPanelById = function(idString){
		var panel = document.querySelector('#' + idString);
		if (!panel)
			return;
		return self.doPanel(panel);
	}

	self.doAll = function(){
		//domUtil.select('panel').forEach( self.doPanel );
		domUtil.select('panel').sort(function(a, b) {
			var aP = domUtil.attr(a, 'priority') || 0;
			var bP = domUtil.attr(b, 'priority') || 0;
			return aP < bP;
		}).forEach(function(panel){
			self.doPanel(panel);
		})
	}

	return self;
})();