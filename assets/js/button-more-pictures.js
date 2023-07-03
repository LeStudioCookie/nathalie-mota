if (document.getElementById('load-more-button')) {
    document.getElementById('load-more-button').addEventListener('click', function(e){ 

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
            body: form_data,
        })
        .then(response => response.json())
        .then(response => {

            ///Etape 4 : si response.paged = false supp bouton

            if (response.success) {
                let posts = response.posts;
                ///Etape 1 : Inserer dans la div .all-post les posts
                /////modele qui ne fonctionne pas : document.querySelector('.all-post').insert(posts);
                ///Etape 2 : changer la valeur de l'attribut data-page
            }else{
                console.log('error');
            }
        });
    });
}