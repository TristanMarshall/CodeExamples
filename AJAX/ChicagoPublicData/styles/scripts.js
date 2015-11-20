$(document).ready(function(){


  $.ajax({
   method: "GET",
    url : "https://data.cityofchicago.org/resource/awnt-66py.json",
    dataType: "json",
    success: function(data) {

      for (i = 0; i < data.length; i++){

        $("ul").append("<li> In the year " + data[i].year + " at the lattitude and longitute of " + data[i].latitude + " " + data[i].longitude + " a crime involving " + data[i].description + " happened </li>");
        }
      }
    });
});
