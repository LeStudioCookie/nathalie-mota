(function($){ 
 $(document).ready(function(){ 
if (document.getElementById('load-more-button')) {
  document.getElementById('load-more-button').addEventListener('click', function (e) {
    //Var
    //let reg_company = document.getElementById('reg_company').value;
    ///Etape 3 : recupérer la valeur de l'attribut data-page du bouton load-more-button = utiliser this
    let paged = '1';

    //ArayData
    var form_data = new FormData();
    form_data.append('paged', paged);

    //Send data
    form_data.append('action', 'load_more');
    fetch(ajaxurl, {
      method: 'POST',
      body: form_data
    }).then(response => response.json()).then(response => {
      ///Etape 4 : si response.paged = false supp bouton

      if (response.success) {
        let posts = response.posts;
        ///Etape 1 : Inserer dans la div .all-post les posts
        /////modele qui ne fonctionne pas : document.querySelector('.all-post').insert(posts);
        ///Etape 2 : changer la valeur de l'attribut data-page
      } else {
        console.log('error');
      }
    });
  });
}
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
if (document.querySelector('#navigation .previous')) {
  document.querySelector('#navigation .previous').addEventListener('click', function () {
    window.history.back();
  });
}
if (document.querySelector('#navigation .next')) {
  document.querySelector('#navigation .next').addEventListener('click', function () {
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
$(document).ready(function () {
  if ($('.next-thumb').length === 0) {
    getPreviousArticlePreview();
  } else {
    getNextArticlePreview();
  }
});

 }); 
 }(jQuery)); 
