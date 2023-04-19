var informationFlow = [];

$(document).ready(function() {

  $('#submit').click(function(){
    var chosen_list = [];
    var chosen = $('input[type=radio]:checked')
      .each(function(){
        chosen_list.push($(this).val());
      });
    var chosen_checks = $('input[type=checkbox]:checked')
    .each(function(){
      chosen_list.push($(this).val());
    });

    if (chosen_list.includes("idk")) {
        if (chosen_list.includes("underOne")) {
            informationFlow.push("#fullTimeJob")
        } else {
            informationFlow.push("#internship")
        }
    }

    $("#question_form").css('display','none');
    for (var i = 0; i < informationFlow.length; i++) {
      var k = informationFlow[i];
      $(k).css('display', 'block');
    }

  });

  $("#reset").click(function(){
    $("#question_form").css('display','block');
    $('#answers').css('display','none');
    $("#yougot").html('');
    $("#desc").html('');
    $(".check_img").css('background-image', "url('unchecked.png')");
    $('input[type=radio]').prop('checked','false');
    $('label').css('background-color', '#f2f2f2');
    $('li').css('background-color', '#f2f2f2');

  });


});