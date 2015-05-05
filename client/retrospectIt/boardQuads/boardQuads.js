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

	fabric.util.addListener(fabric.document, 'dblclick', function() {
		bootbox.prompt("Whatcha want to say?", function(result) {                
		  if (result === null) {                                             
		  } else {
		    canvas.add(new fabric.Text(result, { left: 100, top: 100 }));                          
		  }
		});
	});
	
});  