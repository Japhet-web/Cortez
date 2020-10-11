var pl = "0";

/*$('.button').click(function(){
  alert('yo');
});*/

//var pagelocation;
var pglist = [];

pglist[0] = $("#zero");
pglist[1] = $("#one");
pglist[2] = $("#two");
pglist[3] = $("#three");
pglist[4] = $("#four");

$(pglist[1]).hide();
$(pglist[2]).hide();
$(pglist[3]).hide();
$(pglist[4]).hide();

$(".first").addClass('highlight');


function setpage(p){
  
  $(pglist[p]).show(5, function(){
    if (pl != p){
      $(pglist[pl]).hide(200,function(){
        pl = p;
      });
    }
  });
 switch(p) {
    case 0:
      $("#container").removeClass('zero one two three').addClass('zero');
      break;
    case 1:
      $("#container").removeClass('zero one two three').addClass('one');
      break;
    case 2:
      $("#container").removeClass('zero one two three').addClass('two');
      break;
    case 3:
      $("#container").removeClass('zero one two three').addClass('three');
      break;
  }


}



$(".first").click(function(){  
  $('.highlight').removeClass('highlight');
  $(this).addClass('highlight');
  setpage(0);
});

$('.second').click(function(){
  $('.highlight').removeClass('highlight');
  $(this).addClass('highlight');
  setpage(1);
});

$('.third').click(function(){
    $('.highlight').removeClass('highlight');
    $(this).addClass('highlight');
    setpage(2);
});

$('.fourth').click(function(){
   $('.highlight').removeClass('highlight');
   $(this).addClass('highlight');
   setpage(3);
});

$('.fifth').click(function(){
   $('.highlight').removeClass('highlight');
   $(this).addClass('highlight');
   setpage(4);
});