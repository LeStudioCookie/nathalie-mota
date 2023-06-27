(function($){ 
 $(document).ready(function(){ 
document.getElementById('load-more-button').addEventListener('click', function (e) {
  var form_data = new FormData();
  form_data.append('action', 'load_more');
  form_data.append('offset', document.querySelectorAll('.all-post > .post').length);
  fetch(ajaxurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache'
    },
    body: new URLSearchParams(form_data)
  }).then(response => {
    if (response.status == 200) {
      return response.text();
    } else {
      console.log('Error');
      console.log(response);
      return;
    }
  }).then(data => {
    var container = document.querySelector('.all-post');
    container.innerHTML += data;
  });
});
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
/*document.querySelector('#navigation .previous').addEventListener('click', function() {
  window.history.back();
});

document.querySelector('#navigation .next').addEventListener('click', function() {
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

$(document).ready(function() {
  $('.previous-thumb').hide();
});

previousLink.addEventListener('mouseover', getPreviousArticlePreview);
nextLink.addEventListener('mouseover', getNextArticlePreview);*/
 }); 
 }(jQuery)); 
