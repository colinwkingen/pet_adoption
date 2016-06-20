// Frontend Logic
$(document).ready(function(){
  event.preventDefault();


  $("#add-pet-button").click(function(){
    event.preventDefault();
    $("#main-content").append("<div id='newListing' class='thumbnail'>" + "<img src ='img/comming-soon.jpg'>" + "<div class='caption'>" + "<h3>New Listing</h3>" + "</div>" + "</div>");
  })

  $("#pet-1").click(function(event){
    $("#hidden-1").show();
  });
  $("#pet-2").click(function(event){
    $("#hidden-2").show();
  });
  $("#pet-3").click(function(event){
    $("#hidden-3").show();
  });
  $("#pet-4").click(function(event){
    $("#hidden-4").show();
  });
  $("#pet-5").click(function(event){
    $("#hidden-5").show();
  });
  $("#pet-6").click(function(event){
    $("#hidden-6").show();
  });
})
