let  params =(new URL(document.location)).searchParams;
let name=params.get('dataId')
console.log(name);


let row = document.querySelector("div")

let body=document.querySelector("body")


fetch(`https://jsonplaceholder.typicode.com/photos/${name}`)
.then((resp)=>resp.json())
.then((datas)=>{

    row.innerHTML=`    <div class="container">
    <div class="row">
    <div class="basket">
        <i class="fa-solid fa-basket-shopping"><sup>0</sup></i>
            </div>
        <div class="detail d-flex justify-content-between">
            <div class="img col-lg-5">
                <img src="./assets/img/R.jpg" alt="">
            </div>
            <div class="info col-lg-6">
                <div class="title">
                    <p>Commod Good</p>
                    <h2>Long-Sleeve Double crew shirt</h2>
                </div>
                <div class="icon justify-content-between">
                </span>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    (no reviews yet)
                    Write a Review
                </span>
                </div>
                <div class="price">
                    <span>$${datas.id}99</span>
                </div>
                <div class="size">
                    <span><i class="fa-solid fa-image"></i>Size Chart</span>
                </div>
                <div class="about">
                    <ul>
                        <li>Brand: <span>Commod Good</span></li>
                        <li>Sku:  <span>CGLD</span></li>
                        <li>Weight: <span>1.00KGS</span></li>
                        <li>Shipping: <span>PSG FORM</span></li>
                    </ul>
                </div>
                <hr>
                <div class="buy">
                    <span>Quantity</span>
                </div>
                <input type="number">
                <div class="buttons d-flex">
                    <p class="tocart"><a href="basket.html">Add To Cart</a></p>
                    <p  class="wishlist"><a href="">Add To Wish List</a></p>
                </div>
            </div>
        </div>
    </div>
</div>`
})

body.append(row);