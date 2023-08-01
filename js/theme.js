(function($){ 
 $(document).ready(function(){ 
/*document.getElementById('menu-toggle').addEventListener('click', function() {
  var header = document.getElementById('header');
  header.classList.toggle('active');
  header.classList.toggle('header-arrive-from-right');
  document.getElementById('fullscreen-menu').classList.toggle('active');
  document.getElementById('menu-toggle').classList.toggle('burger-cross');
});

var menuItems = document.getElementsByClassName('menu-item');
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    document.getElementById('fullscreen-menu').classList.remove('active');
    document.getElementById('menu-toggle').classList.remove('burger-cross');
    var header = document.getElementById('header');
    header.classList.remove('active');
    header.classList.remove('header-arrive-from-right');
  });
}*/

document.getElementById('menu-toggle').addEventListener('click', function () {
  var header = document.getElementById('header');
  var isHeaderActive = header.classList.contains('active');
  if (isHeaderActive) {
    header.classList.remove('active');
    header.classList.remove('header-arrive-from-right');
    header.classList.add('header-slide-out');
  } else {
    header.classList.add('active');
    header.classList.add('header-arrive-from-right');
    header.classList.remove('header-slide-out');
  }
  document.getElementById('fullscreen-menu').classList.toggle('active');
  document.getElementById('menu-toggle').classList.toggle('burger-cross');
});
function ajax_load_more() {
  // Var
  let currentPage = 1;
  let selectedCategory = '';
  let selectedFormats = '';
  let selectedTrier = '';
  let existingPosts = [];
  let postPerPage = 2;
  let postNotIn = '';
  if ($('#load-more-button').length) {
    currentPage = parseInt(document.getElementById('load-more-button').getAttribute('data-page'));
  }
  if (window.location.href == 'http://localhost/nathalie-mota/') {
    if ($('body').hasClass('is-mobile')) {
      postPerPage = 8;
    } else {
      postPerPage = 12;
    }
    ;
    selectedCategory = $('.dropdown-category .item.active').attr('data-slug');
    selectedFormats = $('.dropdown-formats .item.active').attr('data-slug');
    selectedTrier = $('.dropdown-trier .item.active').attr('data-slug');
    if (selectedCategory === undefined) {
      selectedCategory = '';
    }
    ;
    if (selectedFormats === undefined) {
      selectedFormats = '';
    }
    ;
    if (selectedTrier === undefined) {
      selectedTrier = '';
    }
    ;
  } else {
    selectedCategory = document.getElementById('categorie-similar').getAttribute('data-value');
    postNotIn = $('#categorie-similar').attr('data-id');
  }
  $(".dropdown").removeClass('active');

  // ArrayData
  var form_data = new FormData();
  form_data.append('paged', currentPage);
  form_data.append('selectedCategory', selectedCategory);
  form_data.append('selectedFormats', selectedFormats);
  form_data.append('selectedTrier', selectedTrier);
  form_data.append('postPerPage', postPerPage);
  form_data.append('postNotIn', postNotIn);

  // Retrieve existing post IDs
  let existingPostElements = document.querySelectorAll('.all-post .item');
  existingPostElements.forEach(element => {
    let postID = element.getAttribute('data-post-id');
    existingPosts.push({
      ID: postID
    });
  });

  // Add existing post IDs to FormData
  form_data.append('existingPosts', JSON.stringify(existingPosts));

  // Send data
  form_data.append('action', 'load_more');
  fetch(ajaxurl, {
    method: 'POST',
    body: form_data
  }).then(response => response.json()).then(response => {
    if (response.paged === true) {
      if ($('#load-more-button').length) {
        $('#load-more-button').remove();
      }
    }
    if (response.success) {
      let newPosts = response.posts;
      if (currentPage == 1) {
        document.querySelector('.all-post').innerHTML = newPosts;
      } else {
        document.querySelector('.all-post').innerHTML += newPosts;
      }
    } else {
      console.log('error');
    }
  });
}
if (document.getElementById('load-more-button')) {
  document.getElementById('load-more-button').addEventListener('click', function (e) {
    let currentPage = parseInt(document.getElementById('load-more-button').getAttribute('data-page'));
    let nextPage = currentPage + 1;
    document.getElementById('load-more-button').setAttribute('data-page', nextPage);
    ajax_load_more();
  });
}
$(".dropdown-category .dropdown-content .item").on("click", function () {
  $(".dropdown-category .dropdown-content .item").not(this).removeClass('active');
  $(this).toggleClass("active");
  if ($('#load-more-button').length) {
    $('#load-more-button').attr('data-page', 1);
  }
  ajax_load_more();
  if ($(this).closest('.dropdown-content').find('.active').length) {
    $(this).closest('.dropdown').find('.dropbtn-select').html($(this).attr('data-slug'));
  } else {
    $(this).closest('.dropdown').find('.dropbtn-select').html('Catégories');
  }
});

/*if (document.getElementById('format')) {
    document.getElementById('format').addEventListener('change', function(e) {
    document.getElementById('load-more-button').setAttribute('data-page', 1);
    ajax_load_more();
    });
}*/

$(".dropdown-formats .dropdown-content .item").on("click", function () {
  $(".dropdown-formats .dropdown-content .item").not(this).removeClass('active');
  $(this).toggleClass("active");
  if ($('#load-more-button').length) {
    $('#load-more-button').attr('data-page', 1);
  }
  ajax_load_more();
  if ($(this).closest('.dropdown-content').find('.active').length) {
    $(this).closest('.dropdown').find('.dropbtn-select').html($(this).attr('data-slug'));
  } else {
    $(this).closest('.dropdown').find('.dropbtn-select').html('Format');
  }
});

/*if (document.getElementById('trier')) {
    document.getElementById('trier').addEventListener('change', function(e) {
    document.getElementById('load-more-button').setAttribute('data-page', 1);
    ajax_load_more();
    });
}*/

$(".dropdown-trier .dropdown-content .item").on("click", function () {
  $(".dropdown-trier .dropdown-content .item").not(this).removeClass('active');
  $(this).toggleClass("active");
  if ($('#load-more-button').length) {
    $('#load-more-button').attr('data-page', 1);
  }
  ajax_load_more();
  if ($(this).closest('.dropdown-content').find('.active').length) {
    $(this).closest('.dropdown').find('.dropbtn-select').html($(this).attr('data-slug'));
  } else {
    $(this).closest('.dropdown').find('.dropbtn-select').html('Trier par');
  }
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
$(".dropbtn").on("click", function () {
  let parent = $(this).closest(".dropdown");
  $(".dropdown").not(parent).removeClass("active");
  parent.toggleClass("active");
});
$('body').delegate('.item .view .ico', 'mouseenter', function (event) {
  let bottomView = $(this).closest('.wrapper-hover').find('.bottom-view');
  bottomView.addClass('active');
});
$('body').delegate('.item .view .ico', 'mouseout', function (event) {
  let bottomView = $(this).closest('.wrapper-hover').find('.bottom-view');
  bottomView.removeClass('active');
});
 }); 
 }(jQuery)); 
