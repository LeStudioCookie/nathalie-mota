$('body').delegate('.item .view .ico','mouseenter', function( event ) {
    let bottomView = $(this).closest('.wrapper-hover').find('.bottom-view');
    bottomView.addClass('active');  
});
$('body').delegate('.item .view .ico','mouseout', function( event ) {
    let bottomView = $(this).closest('.wrapper-hover').find('.bottom-view');
    bottomView.removeClass('active');
});