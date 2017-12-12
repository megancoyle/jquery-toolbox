/*  JavaScript Document                      */
$(document).ready(function(){
  $('.tooltip').mouseover(function(e){
    if($(this).attr('data-tip-type') == 'text') {
      $('#tooltip-container').html($(this).attr('data-tip-source'));
    }

    if($(this).attr('data-tip-type') == 'html') {
      var elementToGet = '#' + $(this).attr('data-tip-source');
      var newHTML = $(elementToGet).html();
      $('#tooltip-container').html(newHTML);
    }

    $('#tooltip-container').css({'display': 'block', 'opacity':0}).animate({opacity:1}, 250);

  }).mousemove(function(e){
    var toolTipWidth = $('#tooltip-container').outerWidth();
    var toolTipHeight = $('#tooltip-container').outerHeight();

    var pageWidth = $('body').width();

    if (e.pageX > pageWidth/2) {
      $('#tooltip-container').css('left', (e.pageX - toolTipWidth + 20) + 'px');
    } else {
      $('#tooltip-container').css('left', (e.pageX - 20) + 'px');
    }

    if (e.pageY > 100) {
      $('#tooltip-container').css('top', (e.pageY - (toolTipHeight + 20)) + 'px');
    } else {
      $('#tooltip-container').css('top', (e.pageY + 20) + 'px')
    }

  }).mouseout(function(e){
    $('#tooltip-container').animate({opacity:0}, 250, function() {
      $('#tooltip-container').css('display', 'none').html('');
    });
  });

});
