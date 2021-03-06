Template.newGameBoard.events({
    'submit form': function (e) {
    	e.preventDefault();
        var formData = _.map(form2js(e.currentTarget), function(value) {
        	return {
        			'id': Random.id(),
        			'label': value
			}
        });

        var createdAt = new Date();

        Games.insert({quads:formData, createdAt: createdAt}, function(er, val)
			{
				Meteor.call('sendEmail',
				            'denise@digital-pioneers.com',
				            'retrospectIt@versionone.com',
				            'Hello from Meteor!',
				            'This is your gameId: ' + val);

				Router.go('retrospectIt', {id: val});

				if(Meteor.isClient) {
					Session.set('gameId', val);
				}
			});  
    }
  });