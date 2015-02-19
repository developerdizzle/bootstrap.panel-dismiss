$(function() {
  $('body').on('click', '[data-dismiss="panel"]', function(e) {
    var $target = $(e.target);
    var panel = $target.attr('href') || $target.attr('data-target');
    
    $(panel).hide();
    
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
});