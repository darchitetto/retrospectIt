Router.route('retrospectThat', {
	path: '/'
})

Router.route('newGameBoard', {
	path: '/newgameboard',
	layoutTemplate: 'main',
	data: function() {
		return {newGameQuads: Quads.find({}) || []}
	},
	yieldRegions: {
    	'retroItButton': {to: 'firstButton'},
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
	}
})

