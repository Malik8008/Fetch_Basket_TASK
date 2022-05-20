let  params =(new URL(document.location)).searchParams;
let name=params.get('dataId')
console.log(params);



fetch("https://jsonplaceholder.typicode.com/photos")
    .then((resp)=>resp.json())
    .then((datas)=>{

    let container =document.querySelector(".container")
    let row=document.createElement("div");
    row.className="row justify-content-between";
    datas.forEach((data) => {
        let card=document.createElement("div");
        let img=document.createElement("img");
        let img1=document.createElement("img");
        let card_body=document.createElement("div");
        let title =document.createElement("h5");
        var a = document.createElement("a");

        card.className="card w-25";
        img.className="img";
        img1.className="img";
        card_body.className="card-body";
        title.className="card-title";
        a.className="a";

        var linkText = document.createTextNode("Info");
        a.appendChild(linkText);
        a.title = "Info";
        a.href = `details.html?dataId=${data.id}`;
        

        img.src=data.url;
        img1.src=data.thumbnailUrl;
        title.innerText=data.title;


        

        card_body.appendChild(title);
        card_body.appendChild(a);
        card.appendChild(img);
        card.appendChild(img1);
        card.appendChild(card_body);

        row.appendChild(card)        
    });

    container.appendChild(row);

});
