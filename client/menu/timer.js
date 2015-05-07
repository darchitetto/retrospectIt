var clock;

function configureClock() {
	clock = $('.retro-timer').FlipClock(300, {
			clockFace: 'MinuteCounter',
			autoStart: false,
			countdown: true,
			callbacks: {
				reset: configureClock
			}
		});
}

Template.timer.onRendered(configureClock);

Template.timer.events({
	"click .timer":function(event) {
		var timerButton = $(event.currentTarget);
		if(timerButton.hasClass('fa-play')) {
			clock.start();				
			timerButton.removeClass('fa-play');
			timerButton.addClass('fa-pause');
		} else {
			timerButton.removeClass('fa-pause');
			timerButton.addClass('fa-play');
			clock.stop();
		}
	},
	"click .timer-reset":function(event) {
			clock.reset();

			var playPauseButton = $('.timer');
			if(playPauseButton.hasClass('fa-pause')) {
				playPauseButton.removeClass('fa-pause');
				playPauseButton.addClass('fa-play');
			}
	}
});
