$('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });

$('.nav a').on('click', function(event) {
  $('html, body').animate({scrollTop:0}, 5000);
});
