$(document).ready(function() {
  $("#track-suggest-form").submit(function(event) {
    event.preventDefault();

    var company = $("input:radio[name=company]:checked").val();
    var frontend = $("input:radio[name=frontend]:checked").val();
    var webApplication = $("input:radio[name=webApplication]:checked").val();
    var fastPace = $("input:radio[name=fastPace]:checked").val();
    var highPerform = $("input:radio[name=highPerform]:checked").val();
    var business = $("input:radio[name=business]:checked").val();

    if (frontEnd === "yes" && backEnd === "yes" && fastPace === "no") {
      // console.log("hi")
      $("#java").show();
    } else if (frontEnd === "yes" && backEnd === "yes" && fastPace === "yes") {
      $("#ruby").show();
    } else if (company === "enterprise" && frontEnd === "yes" && backEnd === "no" && webApplication === "yes" && fastPace === "yes" && high-perform === "no" && business === "no") {
      $("#ruby").show();
    } else if (company === "enterprise" && frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "yes" && high-perform === "no" && business === "no") {
      $("#php").show();
    } else if (company === "enterprise" && frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && high-perform === "yes" && business === "no") {
      $("#java").show();
    } else if (company === "enterprise" && frontEnd === "yes" && backEnd === "no" && webApplication === "no" && fastPace === "no" && high-perform === "yes" && business === "no") {
      $("#java").show();



  });


});
