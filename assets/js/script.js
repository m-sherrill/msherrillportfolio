$(document).ready(function(){
    $('.parallax').parallax();
  });



  // Insert in random positions
jQuery(document).ready(function() {

  // select the item(s) to move randomly
  var $randItem = $('#heroCol1').find('.randomLeaf');
  
  // select the target for random placement
  var $items = $('#heroCol1').find('.randomLeaf');
  
  $($randItem).each(function() { 
  var pos = Math.floor(Math.random() * $items.length)
  $(this).insertAfter($items.eq(pos));
  });

  $randItem = $('#heroCol2').find('.randomLeaf');
  
  // select the target for random placement
  $items = $('#heroCol2').find('.randomLeaf');
  
  $($randItem).each(function() { 
  var pos = Math.floor(Math.random() * $items.length)
  $(this).insertAfter($items.eq(pos));
  });

  $randItem = $(document).find('.randomLeaf');
  
  // select the target for random placement
  $items = $(document).find(".row");
  
  $($randItem).each(function() { 
  var pos = Math.floor(Math.random() * $items.length)
  $(this).insertAfter($items.eq(pos));
  });
  
  });