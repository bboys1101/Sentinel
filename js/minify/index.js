$(window,document,void 0).ready(function(){$("input").blur(function(){var e=$(this);e.val()?e.addClass("used"):e.removeClass("used")});var e=$(".ripples");e.on("click.Ripples",function(e){var i=$(this);i.parent().offset(),i.find(".ripplesCircle")}),$("body").on("click",".requestInvite",function(){$("form, .blackCover").addClass("active")}),$("body").on("click",".blackCover",function(){$("form, .blackCover").removeClass("active")})});