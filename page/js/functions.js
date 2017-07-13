jQuery(function($) {'use strict';

	 		
	 //Filter Mix works
	 $(".gallery").mixItUp();


	// ============= Owl ===========
	//Slider whtat we do
	$("#do-slider,#news-slider").owlCarousel({
      autoPlay:3000,
      items :3,
		pagination : false,
		stopOnHover : true,
		navigationText :["<i class='chevron-thin-left'></i>","<i class='chevron-thin-right'></i>"],
		navigation : true,
      itemsDesktop : [1000,3],
      itemsDesktopSmall : [992,3]
 
   }); 
  
	  // ============= Parallax=============
	  $('#projects').parallax("50%", 0.3);

}); 

