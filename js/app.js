$(document).ready( function() {

	$('.choose-animals').on('click', function(){
		$('#animals-content').removeClass('hidden')
		$('#plants-content').addClass('hidden')
	})

	$('.choose-home').on('click', function(){
		$('#animals-content').addClass('hidden')
		$('#plants-content').addClass('hidden')
	})

	$('.choose-plants').on('click', function(){
		$('#animals-content').addClass('hidden')
		$('#plants-content').removeClass('hidden')
	})



	$('.subMenu').smint();

  $('.subMenu').smint({
  	'scrollSpeed' : 1000
  });



});
