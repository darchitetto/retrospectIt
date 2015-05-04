Router.route('retrospectThat', {
	path: '/',
	data: function() {
		return {quads: Quads.find({}) || []}
	}
})

Router.route('retrospectIt', {
	path: '/retrospectIt/:id',
	data: function() {
		return {quads: Games.findOne({_id: this.params.id}).quads}
	}
})

