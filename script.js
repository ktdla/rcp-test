$(document).ready(function() {
  button_validate();
  $('#username, #password').keydown(button_validate);
  $('.color').click( function () {
    $(this).addClass('click');
  });
  floating_button();
});

function button_validate() {
  if($('#username').val().length > 0 && $('#password').val().length > 6) {
    $('.button').addClass('wrapper');
  }
  else {
    $('.button').removeClass('wrapper');
  }
};

function floating_button() {
  var tlMenu = new TimelineLite({
    paused: true
  });
  el = $(".menu-block");
  tlMenu.to(el, .8, {
    width: '310px',
    height: 455,
    margin: 0,
    borderRadius: 10,
    ease: Back.easeInOut
  })

  $('.menu-block .fa-plus').on('click', function() {
    if($(this).hasClass('.menu-active')){
      tlMenu.reverse();
      $(this).removeClass('.menu-active');
      $('.menu-block').removeClass('menu-active');
      $('.card').removeClass('degrade');
    } else {
      tlMenu.play();
      $(this).addClass('.menu-active');
      $('.menu-block').addClass('menu-active');
      $('.card').addClass('degrade');
    }
  });
}