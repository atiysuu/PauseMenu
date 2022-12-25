window.addEventListener('message', function(event) {
  var v = event.data;

  switch(v.action) {

      case 'show':
			ShowSettings()
			$('#showupdates').hide();
			$('#showabout').hide();			
      break;

  }
})

function ShowSettings() {
	$('body').fadeIn();
  openUi = true;
}

$(function(){

  $('#settings').click(function(){
    $.post('https://PauseMenu/SendAction', JSON.stringify({action: 'settings'}));
    CloseAll();
  })

  $('#map').click(function(){
    $.post('https://PauseMenu/SendAction', JSON.stringify({action: 'map'}));
    CloseAll();
  })

  $('#resume').click(function(){
    CloseAll();
  })

  $('#updates').click(function(){
    $('.buttons').fadeOut();
    $('#showabout').fadeOut();
    $('#showupdates').fadeIn();
  })

  $('#rules').click(function(){
    $('.buttons').fadeOut();
    $('#showupdates').fadeOut();
    $('#showabout').fadeIn();
  })

  $('#back2').click(function(){
    $('.buttons').fadeIn();
    $('#showabout').fadeOut();
    $('#showupdates').fadeOut();
  })

  $('#back1').click(function(){
    $('.buttons').fadeIn();
    $('#showabout').fadeOut();
    $('#showupdates').fadeOut();
  })

  $('#exit').click(function(){
  $.post('https://PauseMenu/SendAction', JSON.stringify({action: 'exit'}));
    CloseAll();
  })

})

function CloseAll(){
  $('body').fadeOut();
  setTimeout(() => { $('#showabout').fadeIn(); }, 200);
  $.post('https://PauseMenu/exit', JSON.stringify({}));
  openUi = false;
}