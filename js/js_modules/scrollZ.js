//Switching windows between encrypt/decrypt to generating hash key

function scrollZ(){

  // Advanced Scroll the page to results  #resultFinal
  this.scrollResults = function(divName, parent)  //arg(DivID, levels to go up from DivID)
  {
	 //if 2nd arg is not provided while calling the function with one arg
		if (typeof(parent)==='undefined') {
		
            $('html, body').animate({
                scrollTop: $(divName).offset().top
                //scrollTop: $('.your-class').offset().top
             }, 'slow'); 
		     // END Scroll the page to results
		} else {
			//if 2nd argument is provided
			var stringX = "$(divName)" + parent + "offset().top";  //i.e constructs -> $("#divID").parent().parent().offset().top
			$('html, body').animate({
                scrollTop: eval(stringX)         //eval is must-have, crashes without it
                }, 'slow'); 
		}  
      
   },

   //Scroll to top
  this.scroll_toTop = function(){  //arg(DivID, levels to go up from DivID)
      $("html, body").animate({ scrollTop: 0 }, "slow");	
  }

}

module.exports = scrollZ;

