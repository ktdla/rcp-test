$(document).ready(function() {
  button_validate();
  $('#username, #password').keydown(button_validate);
  $('.color').click( function () {
    $(this).addClass('click');
  });
  anonymus();
});

function button_validate() {
  if($('#username').val().length > 0 && $('#password').val().length > 6) {
    $('.button').addClass('wrapper');
  }
  else {
    $('.button').removeClass('wrapper');
  }
};

function anonymus () {
 var tlMenu = new TimelineLite({
   paused: true
 });
 el = $(".menu-block");
 tlMenu.to(el, .8, {
     margin: 0,
     padding: 40,
     width: '361px',
     height: '455px',
     borderRadius: 10,
     ease: Back.easeInOut
   })

  $('.menu-block .fa-plus').on('click', function() {
    if($(this).hasClass('.menu-active')){
      tlMenu.reverse();
      $(this).removeClass('.menu-active');
      $('.menu-block').removeClass('menu-active');
    } else {
      tlMenu.play();
      $(this).addClass('.menu-active');
      $('.menu-block').addClass('menu-active');
    }
  });
}
