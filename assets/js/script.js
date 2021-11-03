$(document).ready(function(){
    $('.parallax').parallax();
  });



  // Insert in random positions
jQuery(document).ready(function() {

  // select the item(s) to move randomly
  var $randItem = $('#heroRow').find('.randomLeaf');
  
  // select the target for random placement
  var $items = $('#heroRow').find('.randomLeaf');
  
  $($randItem).each(function() { 
  var pos = Math.floor(Math.random() * $items.length)
  $(this).insertAfter($items.eq(pos));
  });
  
  });