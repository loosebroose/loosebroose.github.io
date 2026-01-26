const images = [ 
"images/dog.jpg",
"images/feet_pic.JPEG",
"images/jump.JPEG",
"images/saladita_sunset.JPEG",
"images/ski.jpg",
"images/stella.JPEG",
"images/wet_bikes.JPEG"  
];

const background = document.getElementByID("background");
const img = background.querySelector("img");

let i = 1
const changeImage = {
  img.src = images[1];
  i = (i +1) % images.length;
};

img.addEventListener("click", changeImage);
