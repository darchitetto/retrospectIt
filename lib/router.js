Router.route('retrospectThat', {
	path: '/'
})

Router.route('newGameBoard', {
	path: '/newgameboard',
	layoutTemplate: 'main',
	yieldRegions: {
    	'otherButtons': {to: 'otherButtons'}
  	}

})

Router.route('retrospectIt', {
	onBeforeAction: function() {
		Session.set('gameId', this.params.id);
		this.next();
	},
	layoutTemplate: 'main',
	path: '/retrospectIt/:id',
	data: function() {
		var game = Games.findOne({_id: this.params.id});
		if(game)
			return {boardQuads: Games.findOne({_id: this.params.id}).quads}
	},
	waitOn: function() {
		return Meteor.subscribe('games');
	},
	yieldRegions: {
		'newGameButton': {to: 'firstButton'},
    	'otherButtons': {to: 'otherButtons'}
  	}
})

Router.route('currentGame', {
	action: function() {
		if(this.ready()) {
			var gameId = Games.find({}, {sort: {createdAt: -1}, limit: 1}).fetch()[0]._id;
			Router.go('retrospectIt', {id: gameId})
			this.next();
		}
	},
	waitOn: function() {
		return Meteor.subscribe('games');
	}

})

