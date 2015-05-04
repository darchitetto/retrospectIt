Template.newGameBoard.events({
    'submit form': function (e) {
		e.preventDefault();
        var formData = _.values(form2js(e.currentTarget));

        Games.insert({quads:formData}, function(er, val)
			{
				Router.go('retrospectIt', {id: val});
			});  
    }
  });