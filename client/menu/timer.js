var clock;

Template.timer.onRendered(
	function(){
		clock = $('.retro-timer').FlipClock(3, {
			clockFace: 'MinuteCounter',
			autoStart: false,
			countdown: true,
			callbacks: {
				stop: function() {
					console.log('stop')
				}
			}
		});


	}
);


Template.timer.events({
	"click button":function() {
			clock.start();
	}
});
