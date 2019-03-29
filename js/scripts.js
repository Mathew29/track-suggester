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
      $("#header-try").hide();
      $("#header-why").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#c").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#php").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#ruby").hide();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#header").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#c").hide();
    } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#ruby").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
      $("#header").show();
      $("#ruby").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#ruby").hide();
      $("#php").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#java").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#c").hide();
      $("#ruby").hide();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#ruby").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#c").hide();
    } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
      $("#header").show();
      $("#java").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#c").hide();
      $("#ruby").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#ruby").hide();
      $("#php").hide();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#php").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#java").hide();
      $("#ruby").hide();
    } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#header").show();
      $("#c").show();
      $("#java").show();
      $("#ruby").show();
      $("#header-try").hide();
      $("#header-why").hide();
      $("#php").hide();
    } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
      $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#java").hide();
     $("#ruby").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#ruby").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#ruby").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#ruby").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "yes"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "yes"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "yes" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header").show();
     $("#java").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#ruby").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#ruby").show();
     $("#header-try").hide();
     $("#header-why").hide();
     $("#c").hide();
     $("#java").hide();
     $("#php").hide();
   } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header").show();
     $("#c").show();
     $("#java").show();
     $("#ruby").show();
     $("#php").show();
     $("#header-try").hide();
     $("#header-why").hide();
   } else if (frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "yes" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "yes" && business === "no"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "yes"){
     $("#header-try").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header-why").hide();
     $("#header").hide();
   } else if (frontEnd === "no" && backEnd === "no" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no"){
     $("#header-why").show();
     $("#c").hide();
     $("#java").hide();
     $("#ruby").hide();
     $("#php").hide();
     $("#header").hide();
     $("#header-try").hide();
   } else {
     alert("Invalid input! Make sure all questions are answered!");
     return;
   }



  });


});
