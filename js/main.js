(function () {
	// Trigger Video.Js
	var player = videojs("my-video", {
		html5: {
			nativeTextTracks: true,
		},
		textTrackSettings: true,
		// aspectRatio: "16:9",
		breakpoints: {
			tiny: 300,
			xsmall: 400,
			small: 500,
			medium: 600,
			large: 700,
			xlarge: 800,
			huge: 900,
		},
	});
	player.selectorQuality();

	// Trigger Thumbnails
	var video = videojs("my-video");
	video.html5Thumbnails({
		id: "my-video",
		scale: 0.18,
		loaderSize: 25,
		autoPlay: false,
	});

	// Show Thumbnail With Hovering On Progress bar
	$(".video-js .vjs-progress-control").hover(function () {
		$(this).mousemove(function () {
			$(this)
				.parent()
				.find(".vjs-thumbnail-holder")
				.css(
					"left",
					$(this)
						.find(".vjs-progress-holder")
						.find(".vjs-mouse-display")
						.css("left")
				);
		});
	});

	// YouTube Start & Pause Button Animation
	function playButton() {
		$(".video-js").on("click", function () {
			$(this).find(".vjs-big-play-button").css("background-color", "unset");
			if ($(this).hasClass("vjs-paused")) {
				$(this)
					.find(".vjs-big-play-button")
					.css("display", "flex")
					.find(".vjs-icon-placeholder")
					.removeClass("playAnimationPaused")
					.addClass("playAnimationPlay")
					.parent()
					.fadeOut(300);
			} else if ($(this).hasClass("vjs-playing")) {
				$(this)
					.find(".vjs-big-play-button")
					.css("display", "flex")
					.find(".vjs-icon-placeholder")
					.removeClass("playAnimationPlay")
					.addClass("playAnimationPaused")
					.parent()
					.fadeOut(300);
			}
		});

		$(".video-js .vjs-control-bar .vjs-play-control").on("click", function () {
			if ($(this).parent().parent().hasClass("vjs-paused")) {
				$(this)
					.parent()
					.parent()
					.find(".vjs-big-play-button")
					.css("display", "flex")
					.find(".vjs-icon-placeholder")
					.removeClass("playAnimationPaused")
					.addClass("playAnimationPlay")
					.parent()
					.fadeOut(300);
			} else if ($(this).parent().parent().hasClass("vjs-playing")) {
				$(this)
					.parent()
					.parent()
					.find(".vjs-big-play-button")
					.css("display", "flex")
					.find(".vjs-icon-placeholder")
					.removeClass("playAnimationPlay")
					.addClass("playAnimationPaused")
					.parent()
					.fadeOut(300);
			}
		});

		$(".video-js .vjs-control-bar").click(function (e) {
			e.stopPropagation();
		});
	}

	if ($(window).width() >= 576) {
		playButton();
	}
	if ($(window).width() <= 576) {
		$(".video-js").on("click", function () {
			$(this).find(".vjs-big-play-button").css("background-color", "unset");
			if ($(this).hasClass("vjs-paused")) {
				$(this).find(".vjs-big-play-button").fadeOut(300);
			}
		});
	}
})();
