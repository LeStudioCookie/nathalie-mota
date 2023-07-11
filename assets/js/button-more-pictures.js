function ajax_load_more(){

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
        body: form_data,
    })
    .then(response => response.json())
    .then(response => {

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

        }else{
            console.log('error');
        }
    });
}

if (document.getElementById('load-more-button')) {
    document.getElementById('load-more-button').addEventListener('click', function(e){ 
        ajax_load_more(); 
    });
}
if (document.getElementById('categorie')) {
    document.getElementById('categorie').addEventListener('change', function(e) {
    ajax_load_more();
});
}
if (document.getElementById('format')) {
    document.getElementById('format').addEventListener('change', function(e) {
    ajax_load_more();
});
}
if (document.getElementById('trier')) {
document.getElementById('trier').addEventListener('change', function(e) {
    ajax_load_more();
});
}