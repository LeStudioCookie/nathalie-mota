$( ".dropbtn" ).on( "click", function() {
    let parent = $( this).closest(".dropdown");
    $(".dropdown").not(parent).removeClass( "active" );
    parent.toggleClass( "active" );
});