Meteor.methods({
	removeAllQuads: function(){
		return Quads.remove({});
	},

	sendEmail: function (to, from, subject, text) {
		check([to, from, subject, text], [String]);

		this.unblock();

		Email.send({
		  to: to,
		  from: from,
		  subject: subject,
		  text: text
		});
  	},

  	updateQuad: function(gameId, quadId, data) {
  		Games.update({
  			_id: gameId,
  			'quads.id': quadId
  		},
  			{
  				$set: {
  					'quads.$.data': data
  				}
  			}
  		)
  	}
});