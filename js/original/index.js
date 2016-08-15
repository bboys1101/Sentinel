$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');
    
   
    

  });

  // toggle class the form
  $('body').on('click','.requestInvite', function() {
      $('form, .blackCover').addClass('active');
  });

  $('body').on('click','.closeBtn', function() {
      $('form, .blackCover').removeClass('active');
  });


});



function btnBack() {
    var SendBtn = $("#SendBtn")
    SendBtn.removeAttr("disabled").text("Send");
}

function btnBackSuc() {
    var SendBtn = $("#SendBtn")
    SendBtn.text("OK");
}


function allDone() {
    $('form h2').text('All Done!!');
    $('form .group').fadeOut(500);
    $('.allDoneMessage').delay(500).fadeIn(500);

    setTimeout(function() {
        location.reload();
    },1800);
}