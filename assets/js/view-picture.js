$( ".item .view .ico" ).on( "mouseover", function() {
    let bottomView = $(this).closest('.wrapper-hover').find('.bottom-view');
    bottomView.addClass('active'); 
}).on( "mouseout", function() {
    let bottomView = $(this).closest('.wrapper-hover').find('.bottom-view');
    bottomView.removeClass('active');
  } );                   