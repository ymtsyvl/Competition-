$(document).ready(function(){
    $("li#two").click(function(){
        $("#contacts").css({
            "background-color": "#A7FFEB",
        });
        $(".navbar ul").css({
            "background-color": "black",
        });
        $(".social ul").css({
            "background-color": "black",
        });
   });
  });
  $(document).ready(function(){
    $("li#one").click(function(){
        $("#contacts").css({
            "background-color": "#ff9999",
        });
        $(".navbar ul").css({
            "background-color": "#ff9999",
        });
        $(".social ul").css({
            "background-color": "#ff9999",
        });
   });
  });

  $(document).ready(function () {

    $(".player").mb_YTPlayer();

});