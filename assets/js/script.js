 // if clicking on the about me button //
 $(".aboutMeLink").on("click", function(){
  $("#aboutMe").fadeIn(2000).css("display", "block")
  $("#workContainer").fadeOut(2000).css("display", "none")
  $("#intro").fadeOut(2000).css("display", "none")
  $("#contactMe").fadeOut(2000).css("display", "none")
  
})


// if clicking on the view work button //
  $(".workLink").on("click", function() {
    $("#workContainer").fadeIn(2000).css("display", "block")
    $("#intro").fadeOut(2000).css("display", "none")
    $("#aboutMe").fadeOut(2000).css("display", "none")
    $("#contactMe").fadeOut(2000).css("display", "none")
    $("#small4img").attr("src", "assets/images/small1.png")
  })


  // If clicking the button for contact //
  $(".contactMeLink").on("click", function(){
    $("#contactMe").fadeIn(2000).css("display", "block")
    $("#workContainer").fadeOut(2000).css("display", "none")
    $("#intro").fadeOut(2000).css("display", "none")
    $("#aboutMe").fadeOut(2000).css("display", "none")
  })

   // if clicking the home button //
   $(".introLink").on("click", function(){
    $("#intro").fadeIn(2000).css("display", "block")
    $("#workContainer").fadeOut(2000).css("display", "none")
    $("#aboutMe").fadeOut(2000).css("display", "none")
    $("#contactMe").fadeOut(2000).css("display", "none")
    $("#small4img").attr("src", "assets/images/small3.png")
  })