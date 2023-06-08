jQuery(document).ready(function($) {

   $('.contact-link').click(function(e){
      e.preventDefault();
      var buttonId = 'one';
      $('#modal-container').removeAttr('class').addClass(buttonId);
      $('body').addClass('modal-active');
    })
    
    $('.modal-background').click(function(e){
      if (e.target !== this)
         return;
      $('#modal-container').addClass('out');
      $('body').removeClass('modal-active');
    });

});
 

 
 
 