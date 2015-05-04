Router.route('retrospectThat', {
	path: '/',
	data: function() {
		return {newGameQuads: Quads.find({}) || []}
	}
})

Router.route('retrospectIt', {
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

