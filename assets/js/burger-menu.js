document.getElementById('menu-toggle').addEventListener('click', function() {
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


