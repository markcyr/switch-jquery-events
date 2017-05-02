$(document).ready(function() {



//Select the element with id button

$('button').on('click', function () {
     $( "body" ).toggleClass( "dark" );

  if($(this).hasClass("switch off")) {
    console.log('hey')
           $('button').removeClass("switch off").addClass("switch on");
           $(".status").text("Hi");


  } else {
    $(this).hasClass("switch on");
     $('button').removeClass("switch on").addClass("switch off");
      console.log('ho')
         $(".status").text("Ho");



  }



});







});
