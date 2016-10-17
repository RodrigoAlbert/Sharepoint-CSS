function menu(){
	if($('.menu').length){
		var menu = $('.menu');
		$(menu, 'li').each(function{
			var link = $(this).attr('app-link');

			$(this).on('click', function(){
				window.location.replace(link);
			});
		});
	}
}

function normalModal(){
	if($('.normalModal').length){
		var modal = $('.normalModal');

	} 
}

function sharepointModal(title, pageUrl, width, height, allowclose, maximize){
		if(title==null || title == "")
			title = "Title";
		if(pageUrl==null || pageUrl == "")
			pageUrl = "http://google.com.br"
		if(width == null || width == "")
			width = 500;
		if(height == null || height == "")
			height = 500;
		if (allowclose == null || allowclose == "")
			allowclose = true;
		if(maximize == null || maximize == "")
			maximize = true;

		var options = {
		    url: pageUrl,
		    title: title,
		    allowMaximize: maximize,
		    showClose: allowclose,
		    width: width,
		    height: height
		};
		SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);   
}