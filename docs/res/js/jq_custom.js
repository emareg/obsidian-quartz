



$(document).ready(function(){

  // determine navbar offset:
  var navbar_offset = $('.navbar').innerHeight();
  console.log(navbar_offset)

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 1});   

  // refresh scroll spy
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })

  // Add smooth scrolling on all links inside the navbar
  $(".navbar a, .intralink").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate(); number (800): duration in ms
      $('html, body').animate({
        scrollTop: $(hash).offset().top -navbar_offset
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });

    }  // End if
  });
});


