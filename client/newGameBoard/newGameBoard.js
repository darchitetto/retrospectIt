Template.newGameBoard.helpers({
	quads: function(){
	    return Quads.find({});
	}
});

Template.newGameBoard.events({
    'submit form': function (e) {
console.log('hi')

		e.preventDefault();
        var formData = form2js(e.currentTarget);

        console.log(formData);


    }
  });