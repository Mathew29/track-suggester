$(document).ready(function() {
  $("#track-suggest-form").submit(function(event) {
    event.preventDefault();

    var frontEnd = $("input:radio[name=frontEnd]:checked").val();
    var webApplication = $("input:radio[name=webApplication]:checked").val();
    var fastPace = $("input:radio[name=fastPace]:checked").val();
    var highPerform = $("input:radio[name=highPerform]:checked").val();
    var business = $("input:radio[name=business]:checked").val();
    var backEnd = $("input:radio[name=backEnd]:checked").val();

    if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes") {
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#c").show();
      $("#java").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#c").show();
      $("#java").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
      $("#java").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#java").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#java").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
      $("#c").show();
      $("#java").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#c").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
    }
    else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#c").show();
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#c").show();
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#c").show();
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#c").show();
     $("#php").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#ruby").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#ruby").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#c").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#php").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#ruby").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#ruby").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#c").show();
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#no").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#why").show();
   } else {
     alert("Invalid input! Make sure all questions are answered!");
     return;
   }



  });


});
