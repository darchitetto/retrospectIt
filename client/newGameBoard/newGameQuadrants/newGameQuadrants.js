Template.newGameQuadrants.helpers({
	gridData: function() {
			var newGameQuads = Quads.find().fetch();
			var rowData = [];
			var gridData = [];

			for(var n=1; n < newGameQuads.length + 1; n++) {
				rowData.push(newGameQuads[n-1]);
				if(n % 2 == 0) {
					gridData.push(rowData);
					rowData = [];
				}
			}
			return gridData;
		}
});