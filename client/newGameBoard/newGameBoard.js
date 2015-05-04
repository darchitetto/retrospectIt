Template.newGameBoard.helpers({
	quads: function(){
	    return Quads.find({});
	}
});

Template.newGameBoard.events({
    'submit form': function (e) {
		e.preventDefault();
        var formData = form2js(e.currentTarget);

		Games.insert({quads:formData});        

        console.log(formData);

    }
  });