Template.boardQuads.helpers({
	rowCount: function() {
		var count = Template.currentData().boardQuads.length / 2;
		console.log(count);
		return _.range(count);
	},
	gridData: function() {
		var boardQuads = Template.currentData().boardQuads;
		var rowData = [];
		var gridData = [];

		for(var n=1; n < boardQuads.length + 1; n++) {
			rowData.push(boardQuads[n-1]);
			if(n % 2 == 0) {
				gridData.push(rowData);
				rowData = [];
			}
		}
		console.log(gridData);
		return gridData;
	}
})

var canvas; 

Template.boardQuads.onRendered(function() {
	canvas = new fabric.Canvas('1');

	canvas.on('mouse:down', function(options) {
	  console.log('X:' + options.e.clientX, 'Y:' + options.e.clientY);
	});

	fabric.util.addListener(fabric.document, 'dblclick', function() {
		bootbox.prompt("What is your name?", function(result) {                
		  if (result === null) {                                             
		    console.log("Prompt dismissed");                              
		  } else {
		    console.log(result);
		    canvas.add(new fabric.Text(result));                          
		  }
		});
	});
	
})

Template.boardQuads.events({
    'click canvas': function (e) {
    	
		
    }
});

  