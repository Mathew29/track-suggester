$(document).ready(function() {
  $("#track-suggest-form").submit(function(event) {
    event.preventDefault();

    var company = $("input:radio[name=company]:checked").val();
    var front-end  = $("input:radio[name=front-end]:checked").val();
    var web-application = $("input:radio[name=web-application]:checked").val();
    var fast-pace = $("input:radio[name=fast-pace]:checked").val();
    var high-perform = $("input:radio[name=high-perform]:checked").val();
    var business = $("input:radio[name=business]:checked").val();



  });


});
