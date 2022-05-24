$(document).ready(function(){

  console.log("hello begin jquery =)");

  var isWorkCurrentPage = true;
  var isPlayCurrentPage = false;
	var isAboutCurrentPage = false;

  $("#workButton").on('click', function(){
    console.log("clicked work button")
    $("#work").css('display','grid').css('transition','0.2s');
    $("#play").css('display','none');
    $("#about").css('display','none');
  });

  $("#playButton").on('click', function(){
    console.log("clicked play button")
    $("#work").css('display','none');
    $("#play").css('display','block').css('transition','0.2s');
    $("#about").css('display','none');
  });

  $("#aboutButton").on('click', function(){
    console.log("clicked about button")
    $("#work").css('display','none');
    $("#play").css('display','none');
    $("#about").css('display','block').css('transition','0.2s');
  });

	// Make Work page current page
	$("#workPage").attr("class", "currentPage");
});
