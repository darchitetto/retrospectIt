Template.quad.onRendered(function() {
	var canvas = new fabric.Canvas(Template.instance().$('canvas').attr('id'));
	var canvasElement = Template.instance().$('canvas');

	canvasElement.on('touchstart', function() {
		bootbox.prompt("Whatcha want to say?", function(result) {                
		  if (result === null) {                                             
		  } else {
		    canvas.add(new fabric.Text(result, { left: 100, top: 100 }));                          
		  }
		});
	})
	
	canvasElement.on('dblclick', function() {
		bootbox.prompt("Whatcha want to say?", function(result) {                
		  if (result === null) {                                             
		  } else {
		    canvas.add(new fabric.Text(result, { left: 100, top: 100 }));                          
		  }
		});
	})
});  