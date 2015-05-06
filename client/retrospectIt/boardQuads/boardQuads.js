Template.boardQuads.helpers({
	rowCount: function() {
		var count = Template.currentData().boardQuads.length / 2;
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

		return gridData;
	}
})

