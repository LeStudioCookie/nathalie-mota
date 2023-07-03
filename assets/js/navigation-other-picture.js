if (document.querySelector('#navigation .previous')) {
  document.querySelector('#navigation .previous').addEventListener('click', function() {
    window.history.back();
  });
}

if (document.querySelector('#navigation .next')) {
  document.querySelector('#navigation .next').addEventListener('click', function() {
    window.history.forward();
  });
}

if (document.querySelector('.previous-link')) {
  const previousLink = document.querySelector('.previous-link');
  previousLink.addEventListener('mouseover', getPreviousArticlePreview);
}

if (document.querySelector('.next-link')) {
  const nextLink = document.querySelector('.next-link');
  nextLink.addEventListener('mouseover', getNextArticlePreview);
}

function getPreviousArticlePreview() {
  $('.previous-thumb').show();
  $('.next-thumb').hide();
}

function getNextArticlePreview() {
  $('.next-thumb').show();
  $('.previous-thumb').hide();
}

$(document).ready(function() {
  if ($('.next-thumb').length === 0) {
    getPreviousArticlePreview();
  } else {
    getNextArticlePreview();
  }
});
