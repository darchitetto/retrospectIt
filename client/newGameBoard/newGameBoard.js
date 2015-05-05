Template.newGameBoard.events({
    'submit form': function (e) {
		e.preventDefault();
        var formData = _.values(form2js(e.currentTarget));

        Games.insert({quads:formData}, function(er, val)
			{
				Meteor.call('sendEmail',
				            'denise@digital-pioneers.com',
				            'retrospectIt@versionone.com',
				            'Hello from Meteor!',
				            'This is your gameId:' + val);

				Router.go('retrospectIt', {id: val});
			});  
    }
  });