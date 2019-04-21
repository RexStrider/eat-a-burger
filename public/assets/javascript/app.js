console.log("app.js line 1");

$.ajax({
    url: '/api',
    method: 'GET'
}).then(res => {
    for (i in res) {
        let el=res[i];
        
        const row = document.createElement("section");

        const col = document.createElement("section");
        col.setAttribute("class", "col");

        const h2 = document.createElement("h2");
        h2.innerText = el.burger_name;
        
        const img = new Image(125, 100);
        img.src = "data:image/jpeg;base64,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";

        col.append(h2, img);

        const button = document.createElement("button");
        button.setAttribute("key", el.id);

        if (el.devoured) {
            row.setAttribute("class", "row eaten");
            button.innerText="Eaten";
            row.append(button, col);
        }
        else {
            button.addEventListener("click", function(){
                const id = this.getAttribute("key");
                $.ajax({
                    url: `/api/update/${id}`,
                    method: 'PUT'
                }).then(res => {
                    window.location.reload(false);
                });
            })

            row.setAttribute("class", "row eat");
            button.innerText="Eat";
            row.append(col, button);
        }
        
        console.log(row);

        document.getElementById("burger-content").append(row);
    }
});

$('.create').on('click', event => {
    
    const burger_name = $("input[name='burger']").val().trim();

    $.ajax({
        url: '/api/create',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({burger_name})
    }).then(res => {
        // console.log(res);
        window.location.reload(false);
    });
});
