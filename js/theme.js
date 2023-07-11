(function($){ 
 $(document).ready(function(){ 
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('fullscreen-menu').classList.toggle('active');
  document.getElementById('menu-toggle').classList.toggle('burger-cross');
});
function ajax_load_more() {
  //Var
  let paged = document.getElementById('load-more-button').getAttribute('data-page');
  let selectedCategory = document.getElementById('categorie').value;
  let selectedFormats = document.getElementById('format').value;
  let selectedTrier = document.getElementById('trier').value;
  console.log(selectedFormats);

  //ArayData
  var form_data = new FormData();
  form_data.append('paged', paged);
  form_data.append('selectedCategory', selectedCategory);
  form_data.append('selectedFormats', selectedFormats);
  form_data.append('selectedTrier', selectedTrier);

  //Send data
  form_data.append('action', 'load_more');
  fetch(ajaxurl, {
    method: 'POST',
    body: form_data
  }).then(response => response.json()).then(response => {
    if (response.paged === false) {
      document.getElementById('load-more-button').remove();
    }
    if (response.success) {
      let posts = response.posts;
      console.log(posts);

      //document.querySelector('.all-post').insert(posts);

      /*let postElement = document.createElement('div');
      postElement.innerHTML = post;
      console.log(post);*/
      //document.querySelector('.all-post').appendChild(postElement);
      document.querySelector('.all-post').innerHTML = posts;

      /*  const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
       insertAfter(document.querySelector('.all-post'),posts); */

      ///Etape 2 : changer la valeur de l'attribut data-page
      //this.setAttribute('data-page', response.nextPage);
    } else {
      console.log('error');
    }
  });
}
if (document.getElementById('load-more-button')) {
  document.getElementById('load-more-button').addEventListener('click', function (e) {
    ajax_load_more();
  });
}
if (document.getElementById('categorie')) {
  document.getElementById('categorie').addEventListener('change', function (e) {
    ajax_load_more();
  });
}
if (document.getElementById('format')) {
  document.getElementById('format').addEventListener('change', function (e) {
    ajax_load_more();
  });
}
if (document.getElementById('trier')) {
  document.getElementById('trier').addEventListener('change', function (e) {
    ajax_load_more();
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
/* document.getElementById('categorie').addEventListener('change', function() {
    var selectedCategory = this.value;
    // Faites quelque chose avec la valeur sélectionnée
    console.log('Catégorie sélectionnée : ' + selectedCategory);
}); */
$(".item .view .ico").on("mouseover", function () {
  let bottomView = $(this).closest('.wrapper-hover').find('.bottom-view');
  bottomView.addClass('active');
}).on("mouseout", function () {
  let bottomView = $(this).closest('.wrapper-hover').find('.bottom-view');
  bottomView.removeClass('active');
});
 }); 
 }(jQuery)); 
