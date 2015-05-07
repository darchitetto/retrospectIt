var clock;

Template.timer.onRendered(
	function(){
		clock = $('.retro-timer').FlipClock(300, {
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
	"click .timer":function(event) {
			var timerButton = $(event.currentTarget);
			if(timerButton.hasClass('glyphicon-play')) {
				clock.start();				
				timerButton.removeClass('glyphicon-play');
				timerButton.addClass('glyphicon-pause')
			} else {
				timerButton.removeClass('glyphicon-pause');
				timerButton.addClass('glyphicon-play')
				clock.stop();
			}


	}
});
