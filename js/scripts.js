$(document).ready(function() {
  $("#track-suggest-form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var frontEnd = $("input:radio[name=frontEnd]:checked").val();
    var webApplication = $("input:radio[name=webApplication]:checked").val();
    var fastPace = $("input:radio[name=fastPace]:checked").val();
    var highPerform = $("input:radio[name=highPerform]:checked").val();
    var business = $("input:radio[name=business]:checked").val();
    var backEnd = $("input:radio[name=backEnd]:checked").val();

    $(".name").text(nameInput);

    if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes") {
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#header").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
      $("#header").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
    } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#php").show();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
    }
    else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#php").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#ruby").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#php").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header-try").show();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header-why").show();
   } else {
     alert("Invalid input! Make sure all questions are answered!");
     return;
   }



  });


});
