document.getElementById('load-more-button').addEventListener('click', function(e){
    var form_data = new FormData();
    form_data.append('action', 'load_more');
    form_data.append('offset', document.querySelectorAll('.all-post > .post').length);

    fetch(ajaxurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        },
        body: new URLSearchParams(form_data),
    })
    .then(response => {
        if (response.status == 200) {
            return response.text();
        } else {
            console.log('Error');
            console.log(response);
            return;
        }
    })
    .then(data => {
        var container = document.querySelector('.all-post');
        container.innerHTML += data;
    });
});

