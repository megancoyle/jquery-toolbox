/*  JavaScript */
$(document).ready(function() {
    injectMarkup();
});

function injectMarkup() {
  $('.expanding-panel').each(function() {
    var linkText = $(this).attr('data-link-text');
    var content = $(this).html();

    $(this).html('<div class="expanding-panel-content-container" style="height:0px;"><div class="expanding-panel-content">' + content + '</div></div>');

    $(this).append('<div class="expanding-panel-trigger">' + linkText + '</div>');
  });

  activatePanels();
}

function activatePanels() {
  $('.expanding-panel .expanding-panel-trigger').on('click', function(){
    var newHeight = null;
    var selectedPanel = $(this).closest('.expanding-panel');
    var selectedContent = selectedPanel.find('.expanding-panel-content-container');

    selectedPanel.toggleClass('open');

    if (selectedPanel.hasClass('open')) {
      newHeight = selectedPanel.find('.expanding-panel-content').outerHeight(true);
    } else {
      newHeight = 0;
    }

    selectedContent.animate({'height': newHeight + 'px'}, 1000, function() {
      if (newHeight != 0) {
        $(this).removeAttr('style');
      }
    });
  });
}
