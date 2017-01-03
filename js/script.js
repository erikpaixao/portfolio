jQuery(document).ready(function($) {
   $.easing.easeInOutExpo = function (x, t, b, c, d) { // definição do efeito que será posteriormente usado no animate
      if (t==0) return b;
      if (t==d) return b+c;
      if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
      return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
   }

   $(".scroll").click(function(event){
      event.preventDefault();
      $('html,body').animate({
         scrollTop:$(this.hash).offset().top
      }, {
         duration: 1500,
         easing: 'easeInOutExpo' // basta usar o mesmo nome que você definiu acima ;)
      });
   });
});

$(function(){   
			var nav = $('#menuHeader');   
			$(window).scroll(function () { 
				if ($(this).scrollTop() > .1) { 
					nav.addClass("menuFixo"); 
				} else { 
					nav.removeClass("menuFixo"); 
				} 
			});  
		});


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       y[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block"; 
    y[myIndex-1].style.display = "block"; 
    setTimeout(carousel, 10000);    
}