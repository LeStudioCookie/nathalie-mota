(function($){ 
 $(document).ready(function(){ 
document.querySelector('#navigation .previous').addEventListener('click', function () {
  window.history.back();
});
document.querySelector('#navigation .next').addEventListener('click', function () {
  window.history.forward();
});
const previousLink = document.querySelector('.previous-link');
const nextLink = document.querySelector('.next-link');
function getPreviousArticlePreview() {
  $('.previous-thumb').show();
  $('.next-thumb').hide();
}
function getNextArticlePreview() {
  $('.next-thumb').show();
  $('.previous-thumb').hide();
}
$(document).ready(function () {
  $('.previous-thumb').hide();
});
previousLink.addEventListener('mouseover', getPreviousArticlePreview);
nextLink.addEventListener('mouseover', getNextArticlePreview);
jQuery(document).ready(function ($) {
  $('.contact-link').click(function (e) {
    e.preventDefault();
    var buttonId = 'one';
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
    let reference = $('.reference').attr('data-reference');
    $('.form-reference').find('input').val(reference);
  });
  $('.modal-background').click(function (e) {
    if (e.target !== this) return;
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
  });
});
 }); 
 }(jQuery)); 
