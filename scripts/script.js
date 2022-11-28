$(document).ready(function(){

  console.log("hello begin jquery =)");

  $("#workButton").on('click', function(){
    $("#workButton").addClass('selected');
    $("#aboutButton").removeClass('selected');
    $("#work").css('display','grid').css('transition','0.2s');
    $("#play").css('display','none');
    $("#about").css('display','none');
  });

  $("#playButton").on('click', function(){
    $("#playButton").addClass('selected');
    $("#work").css('display','none');
    $("#play").css('display','block').css('transition','0.2s');
    $("#about").css('display','none');
  });

  $("#aboutButton").on('click', function(){
    $("#aboutButton").addClass('selected');
    $("#workButton").removeClass('selected');
    // var app = document.getElementById('intro');
    // var typewriter = new
    // Typewriter(app, {
    //   loop: false,
    //   delay: 75,
    // });
    // typewriter
    // .pauseFor(1200)
    // .typeString('<strong>Hello world! </strong>')
    // .pauseFor(60)
    // .typeString('Welcome to my site.')
    // .start();
    $("#work").css('display','none');
    $("#play").css('display','none');
    $("#about").css('display','block').css('transition','0.2s');
  });

	// Make Work page current page
	$("#workPage").attr("class", "currentPage");

  $(".btn-gslabs").click(function(){
    $(".gslabs").collapse('toggle');
    $(".btn-gslabs").toggleClass('active');
  });

  $(".btn-recall").click(function(){
    $(".recall").collapse('toggle');
    $(".btn-recall").toggleClass('active');
  });
  $(".btn-whales").click(function(){
    $(".whales").collapse('toggle');
    $(".btn-whales").toggleClass('active');
  });
  $(".btn-lintel").click(function(){
    $(".lintel").collapse('toggle');
    $(".btn-lintel").toggleClass('active');
  });
  $(".btn-vaxxy").click(function(){
    $(".vaxxy").collapse('toggle');
    $(".btn-vaxxy").toggleClass('active');
  });
  $(".btn-tule").click(function(){
    $(".tule").collapse('toggle');
    $(".btn-tule").toggleClass('active');
  });
  $(".btn-porpoise").click(function(){
    $(".porpoise").collapse('toggle');
    $(".btn-porpoise").toggleClass('active');
  });
  $(".btn-virus").click(function(){
    $(".virus").collapse('toggle');
    $(".btn-virus").toggleClass('active');
  });
  $(".btn-murre").click(function(){
    $(".murre").collapse('toggle');
    $(".btn-murre").toggleClass('active');
  });
  $(".btn-lead").click(function(){
    $(".lead").collapse('toggle');
    $(".btn-lead").toggleClass('active');
  });

});
