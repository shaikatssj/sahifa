$(document).ready(function(){
  $.ajax({
    url: urt, 
    dataType: 'text', 
    success: function(data) { 
      $("#head").html(data);
    },
    error: function() { 
      alert("error");
    }
  });     
   
});
