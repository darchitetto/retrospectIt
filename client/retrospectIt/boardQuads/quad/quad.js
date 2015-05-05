Template.quad.onRendered(function() {
	var canvasIdAndIndexInGamesQuads = Template.instance().$('canvas').attr('id');
	var canvas = new fabric.Canvas(Template.instance().$('canvas').attr('id'));
	var canvasElement = Template.instance().$('canvas');

	canvas.loadFromJSON(Template.currentData().data);
	canvas.renderAll();
	
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
		    //Meteor.call('updateQuad',Session.get('gameId'), canvasIdAndIndexInGamesQuads, JSON.stringify(canvas))
		  }
		});
	})

	canvas.on('after:render', function(options) {
		Meteor.call('updateQuad',Session.get('gameId'), canvasIdAndIndexInGamesQuads, JSON.stringify(canvas))
	    console.log('here');
	});
	
}); 