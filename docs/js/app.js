$(document).ready(function () {
	setTimeout(function () {
		$('.loader-bg').fadeOut(300);
		$('a').click(function (e) {
			var itemHref = $(this).attr('href');
			if (itemHref !== 'index.html') {
				e.preventDefault();
				$('.loader-bg').fadeIn(300);
				$('body').css({
					'overflow': 'hidden'
				})
				setTimeout(function () {
					$.ajax({
							url: itemHref,
							method: 'GET',
							dataType: 'html'
						})
						.done(function (res) {
							$('#result').html(res);
							setTimeout(function () {
								$('.loader-bg').fadeOut(300);
								$('body').css({
									'overflow': 'auto'
								})
							}, 500);
						});
				}, 1300);
			}
		});
	},1000);
});
