// let slideindex = 0;

// function slidcontroller(x) {
//   slideindex = slideindex + x;
//   slideshow(slideindex);
// }

// function slideshow(num) {
//   let slides = document.getElementsByClassName("slide");

//   if (slideindex == slides.length) {
//     slideindex = 0;
//     num = 0;
//   }
//   if (num < 0) {
//     slideindex = slides.length - 1;
//     num = slideindex.length - 1;
//   }
//   for (let i of slides) {
//     i.style.display = "none";
//   }
//   slides[slideindex].style.display = "block";
// }
// slideshow(slideindex);
