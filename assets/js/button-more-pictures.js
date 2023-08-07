function ajax_load_more() {

    // Var
    let currentPage = 1;
    let selectedCategory = '';
    let selectedFormats = '';
    let selectedTrier = '';
    let existingPosts = [];
    let postPerPage = 2;
    let postNotIn = '';
    

    if($('#load-more-button').length){
        currentPage = parseInt(document.getElementById('load-more-button').getAttribute('data-page'));
    }

    if(window.location.href == 'http://localhost/nathalie-mota/') { 
        if ($('body').hasClass('is-mobile')) {
            postPerPage = 8;
        } else { 
            postPerPage = 12;
        };
       
        selectedCategory = $('.dropdown-category .item.active').attr('data-slug');
        selectedFormats = $('.dropdown-formats .item.active').attr('data-slug');
        selectedTrier = $('.dropdown-trier .item.active').attr('data-slug');
        if(selectedCategory === undefined){selectedCategory = '' };
        if(selectedFormats === undefined){selectedFormats = '' };
        if(selectedTrier === undefined){selectedTrier = '' };
    } else {
        selectedCategory = document.getElementById('categorie-similar').getAttribute('data-value'); 
        postNotIn = $('#categorie-similar').attr('data-id');
    }

    $( ".dropdown" ).removeClass('active');

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
        existingPosts.push({ ID: postID });
    });

    // Add existing post IDs to FormData
    form_data.append('existingPosts', JSON.stringify(existingPosts));

    // Send data
    form_data.append('action', 'load_more');

    fetch(ajaxurl, {
        method: 'POST',
        body: form_data,
    })
        .then(response => response.json())
        .then(response => {

            if (response.paged === true) {
                if($('#load-more-button').length){
                    $('#load-more-button').remove();
                }
            }

            if (response.success) {
                let newPosts = response.posts;
            
                if( currentPage ==1){
                    document.querySelector('.all-post').innerHTML = newPosts;

                }else{
                    document.querySelector('.all-post').innerHTML += newPosts;
                }
            }else {
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

$( ".dropdown-category .dropdown-content .item" ).on( "click", function() {
    $( ".dropdown-category .dropdown-content .item" ).not(this).removeClass('active');
    $(this).toggleClass( "active" );
    if($('#load-more-button').length){
        $('#load-more-button').attr('data-page', 1);
    }
    ajax_load_more();

    if($(this).closest('.dropdown-content').find('.active').length){
        $(this).closest('.dropdown').find('.dropbtn-select').html($(this).attr('data-slug'));
    }else{
        $(this).closest('.dropdown').find('.dropbtn-select').html('Catégories');
    }

});

$( ".dropdown-formats .dropdown-content .item" ).on( "click", function() {
    $( ".dropdown-formats .dropdown-content .item" ).not(this).removeClass('active');
    $(this).toggleClass( "active" );
    if($('#load-more-button').length){
        $('#load-more-button').attr('data-page', 1);
    }
    ajax_load_more();

    if($(this).closest('.dropdown-content').find('.active').length){
        $(this).closest('.dropdown').find('.dropbtn-select').html($(this).attr('data-slug'));
    }else{
        $(this).closest('.dropdown').find('.dropbtn-select').html('Format');
    }

});

$( ".dropdown-trier .dropdown-content .item" ).on( "click", function() {

    $( ".dropdown-trier .dropdown-content .item" ).not(this).removeClass('active');
    $(this).toggleClass( "active" );
    if($('#load-more-button').length){
        $('#load-more-button').attr('data-page', 1);
    }
    ajax_load_more();

    if($(this).closest('.dropdown-content').find('.active').length){
        $(this).closest('.dropdown').find('.dropbtn-select').html($(this).attr('data-slug'));
    }else{
        $(this).closest('.dropdown').find('.dropbtn-select').html('Trier par');
    }

});