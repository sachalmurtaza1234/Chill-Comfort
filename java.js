let allproducts = document.getElementById("allproducts");
let products = [
  { name: "Inverter Split AC", image: "./Assests/b.jpg", pprice: "980000" },
  { name: "Floor Standing AC", image: "./Assests/c.jpg", pprice: "90000" },
  { name: "Floor Standing AC", image: "./Assests/d.jpg", pprice: "80000" },
  { name: "Inverter Split AC", image: "./Assests/a.jpg", pprice: "70000" },
 
];
for (var i = 0; i < products.length; i++) {
  allproducts.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
    <div class="card"  style="width:100%; z-index:20;height:80vh;border-radius:20px display:flex; flex-direction:column; gap:100px; text-align:center">
    <img src="${products[i].image}" class="card-img-top"  height="200" width="100%" style="border-radius:10px"alt="...">
    <div class="card-body">
      <h5 class="card-title text-warning">${products[i].name}</h5>
      <p class="card-text text-success">${products[i].pprice}</p>
      <a href="#" class="btn text-secondary"><button class="btn-cart">See More</button></a>
    </div>
  </div>`;
}
console.log(products);
const testimonials = [
  {
    image: "https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg",
    text: "The Chill Comfort AC provides an effortless cooling experience. It quickly brings down the room temperature, creating a refreshing and comfortable atmosphere. ",
    client: "John Doe"
  },
  {
    image: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1e2.jpg",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    client: "Jane Smith"
  },
  , {
    image: "https://media.istockphoto.com/id/1424988699/photo/businessman-contemplating-in-the-office-looking-through-the-window.jpg?s=612x612&w=is&k=20&c=NBM3W8rqLsK-BhgF6WRn0FhcVAyeQKMK6_PRFfafD6g=",
    text: "pakistan",
    client: "khan "
  }
  // Add more testimonials as needed
];

let Cti = 0;

document.getElementById('btn-testimonials').addEventListener('click', nexttestimonials);

function showwork() {
  const testimonial = testimonials[Cti];
  const clientImage = document.querySelector('.image');
  const testimonialText = document.querySelector('.text');
  const clientName = document.querySelector('.name');

  clientImage.src = testimonial.image;
  testimonialText.innerText = testimonial.text;
  clientName.innerText = testimonial.client;
}

function nexttestimonials() {
  Cti = (Cti + 1) % testimonials.length;
  showwork();
}

// Display the first testimonial when the page loads
showwork();
//  testimonials button coding animation

var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// Company name animation loop
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// compare word animation
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml12 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });