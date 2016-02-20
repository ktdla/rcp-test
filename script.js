$(document).ready(function() {
  button_validate();
  $('#username, #password').keydown(button_validate);
  $('.color').click( function () {
    $(this).addClass('click');
  })
});

function button_validate() {
  if($('#username').val().length > 0 && $('#password').val().length > 6) {
    $('.button').addClass('wrapper');
  }
  else {
    $('.button').removeClass('wrapper');
  }
}