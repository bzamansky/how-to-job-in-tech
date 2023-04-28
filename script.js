var informationFlow = ["#jobProcess","#resumeIntro","#resumeRules","#resumeExamples","#applicationsIntro","#applicationsFindJobs","#interviewsIntro","#interviewAdvice","#interviewingPriorities","#interviewsOtherTypes","#interviewsBehavioral", "#end"];
var chosens = [];
var ind = 0;

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

  $('#submitTimeToGrad').click(function(){
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

  $('#submitSummerBtwn').click(function(){
    var chosen = $('input[type=radio]:checked').each(
      function() {
        chosens.push($(this).val())
      }
    )
    if (chosens.includes("noSummer")){
      $("#noSummerBetweenFTE").css('display','block');
    } else {
      $("#whyInternship").css('display','block');
    }
  })
  
  $("#whyInternship i").click(function() {
    $("#courseworkTaken").css('display','block');
  });
 
  $("#submitCourseworkTaken").click(function() {
    var chosen = $('input[type=checkbox]:checked').each(
      function() {
        chosens.push($(this).val())
      }
    )

    // Has only taken intro, or no CS courses, and >3 years to grad
    if ((introOnly() || noneOnly()) && chosens.includes('overthree')) {
      $("#freshmanIntern").css('display', 'block');
    // Has only taken intro, or no CS courses, and <3 years to grad
    } else if (introOnly() || noneOnly()){
      $("#introOnlyIntern").css('display', 'block');
    // Has taken more than just intro courses
    } else if (introPlus()) {
      $("#internBlurb").css('display', 'block');
    }

  });

  $("i").not(".whyintern").click(function() {
    $(informationFlow[ind]).css('display','block');
    ind++;
  })

});

function introOnly() {
  var hasIntro = chosens.includes('intro');
  var hasDS = chosens.includes('datasctructures');
  var hasAlgo = chosens.includes('algo');
  var hasNone = chosens.includes('none');

  return hasIntro && !hasDS && !hasAlgo && !hasNone;
}

function noneOnly() {
  var hasIntro = chosens.includes('intro');
  var hasDS = chosens.includes('datasctructures');
  var hasAlgo = chosens.includes('algo');
  var hasNone = chosens.includes('none');

  return !hasIntro && !hasDS && !hasAlgo && hasNone;
}

function introPlus() {
  var hasIntro = chosens.includes('intro');
  var hasDS = chosens.includes('datasctructures');
  var hasAlgo = chosens.includes('algo');
  var hasNone = chosens.includes('none');

  return (hasDS || hasAlgo);
}