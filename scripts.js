function menu(){
	var menu = $('.menu');
	$(menu, 'li').each(function{
		var link = $(this).attr('app-link');

		$(this).on('click', function(){
			window.location.replace(link);
		});
	});

}