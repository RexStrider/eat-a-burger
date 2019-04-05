console.log("In the app javascript file");

$.ajax({
    url: '/api',
    method: 'GET'
}).then(res => {
    console.log(res);
});

$('.create').on('click', event => {
    // console.log("create button was clicked");
    const burger_name = $("input[name='burger']").val().trim();

    $.ajax({
        url: '/api/create',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({burger_name})
    }).then(res => {
        console.log(res);
    });
});

$('.update').on('click', event => {
    const id = 1;

    $.ajax({
        url: `/api/update/${id}`,
        method: 'PUT'
    }).then(res => {
        console.log(res);
    });
});