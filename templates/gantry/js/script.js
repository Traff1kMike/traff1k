jQuery("document").ready(function(){

	jQuery("#toggle").click(function() {
		//Toggle the menu
	  jQuery(this).toggleClass("on");
	  jQuery(".menu-wrap").slideToggle();
	});
	
});