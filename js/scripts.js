$(document).ready(function() {
  $("#track-suggest-form").submit(function(event) {
    event.preventDefault();

    var company = $("input:radio[name=company]:checked").val();
    var frontEnd = $("input:radio[name=frontEnd]:checked").val();
    var webApplication = $("input:radio[name=webApplication]:checked").val();
    var fastPace = $("input:radio[name=fastPace]:checked").val();
    var highPerform = $("input:radio[name=highPerform]:checked").val();
    var business = $("input:radio[name=business]:checked").val();
    var backEnd = $("input:radio[name=backEnd]:checked").val();

    if (company === "enterprise" && frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "no" && highPerform === "no" && business === "no") {
      $("#java").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && webApplication === "no" && fastPace === "yes" && highPerform === "no" && business === "no") {
      $("#ruby").show();
    } else if (company === "enterprise" && frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && high-perform === "no" && business === "no") {
      $("#ruby").show();
    } else if (company === "enterprise" && frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && high-perform === "no" && business === "no") {
      $("#php").show();
    } else if (company === "enterprise" && frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && high-perform === "yes" && business === "no") {
      $("#java").show();
    } else if (company === "enterprise" && frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && high-perform === "yes" && business === "no") {
      $("#java").show();
    }



  });


});
