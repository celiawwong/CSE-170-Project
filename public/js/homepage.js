'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

  $(".home_a").click(function(){
  	woopra.track("home_a");
  })

  $(".home_b").click(function(){
  	woopra.track("home_b");
  })

  $(".menu_a").click(function() {
    console.log("clicked through a");
    woopra.track("menu_a");
  })

  $(".menu_b").click(function() {
    console.log("clicked through b");
    woopra.track("menu_b");
  })
}