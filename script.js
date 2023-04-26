var informationFlow = ["#jobProcess","#resumeIntro","#resumeRules","#resumeExamples","#applicationsIntro","#applicationsFindJobs","#interviewsIntro","#interviewAdvice","#interviewingPriorities","#interviewsOtherTypes","#interviewsBehavioral"];
var chosens = []

$(document).ready(function() {
  
  $('#submitJobType').click(function(){
    var chosen = $('input[type=radio]:checked').each(
      function() {
        chosens.push($(this).val())
      }
    )

    if (chosens.includes("fte")){
      $("#fteBlurb").css('display','block');
    } else {
      $("#timeTilGrad").css('display','block');
    }
  })

  $('#timeTilGrad').click(function(){
    var chosen = $('input[type=radio]:checked').each(
      function() {
        chosens.push($(this).val())
      }
    )

    if (chosens.includes("underOne")){
      $("#timeTilGradSummer").css('display','block');
    } else {
      $("#whyInternship").css('display','block');
    }
  })
  
 

});