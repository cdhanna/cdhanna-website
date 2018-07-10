var keys = function(){
	var self = this;

	var listeners = [];
	
	// console.log('key init', window)
	window.onkeydown = function(e){
		// console.log(e)
		listeners.filter(function(listener){
			return listener.key == e.key
				.replace('ArrowRight', 'right')
				.replace('ArrowLeft', 'left');
		}).forEach(function(listener){
			listener.callback(e);
		})
	}



	self.on = function(key, callback){
		listeners.push({
			key: key,
			callback: callback
		});
	}

	return self;
}();