$(function() {

	var   headerHeight = $('#js-header').height(),
				heightNav = $('#js-nav-container').innerHeight();



  $('#btn_js').click(function(e){
  	e.preventDefault();
  	var plansOffset = $('#js-plans').offset().top;

  	$('html, body').animate({
  		scrollTop: plansOffset - 50
  	}, 2000)
  });

  $('#js-nav a').click(function(e){
  	e.preventDefault();

  	var currentBlock = $(this).attr('href'),
  			currentBlockOffset = $(currentBlock).offset().top;

  	$('html, body').animate({
  		scrollTop: currentBlockOffset - 50
  	}, 1000)
  });


	$(document).scroll(function(){

		var documentScroll = $(this).scrollTop();
		
		if(documentScroll >= headerHeight){
			$('#js-nav-container').addClass('nav-fixed');
			$('#js-header').css('padding-top', heightNav);
		}
		else{
			$('#js-nav-container').removeClass('nav-fixed');
			$('#js-header').removeAttr('style');
		}
	});


	$('#js-show-modal').click(function(e){
		e.preventDefault();

		$('.modal').addClass('modal-show');
		$('.modal').removeAttr('style');
		$('.overlay').css('display', 'block');
	});

	$('#js-modal-close, .overlay').click(function(e){
		e.preventDefault();

		$('.modal').removeClass('modal-show');
		$('.modal').css('display', 'block');
		$('.overlay').removeAttr('style');
	});

});
