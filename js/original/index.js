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

  $('body').on('click','.blackCover', function() {
      $('form, .blackCover').removeClass('active');
  });


});