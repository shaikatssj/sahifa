$(document).ready(function(){
  $.ajax({
    url: urp, 
    dataType: 'text', 
    success: function(data) { 
      $("#head").html(data);
    },
    error: function() { 
      alert("error");
    }
  });     
   
});
