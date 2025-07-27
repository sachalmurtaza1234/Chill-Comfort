let verticalproducts=document.getElementById("verticalproducts")
let Vertical=[
    {name:"Vertical AC",image:"./Vertical assests/1.png",pprice:"1000000"},
    {name:"Vertical AC",image:"./Vertical assests/2.png",pprice:"1000000"},
];
for (var i = 0; i < products.length; i++) {
    allproducts.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card"  style="width:100%; z-index:20;">
      <img src="${products[i].image}" class="card-img-top" height="200" width="100%" alt="...">
      <div class="card-body">
        <h5 class="card-title text-warning">${products[i].name}</h5>
        <p class="card-text text-success">${products[i].pprice}</p>
        <a href="#" class="btn btn-primary">Add To Cart</a>
      </div>
    </div>`;
  }