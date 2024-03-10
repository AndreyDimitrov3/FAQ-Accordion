(function () {
  window.addEventListener("DOMContentLoaded", domLoaded);

  function domLoaded(e) {
    const h1Images = document.body.querySelectorAll(".h1-image");
    h1Images.forEach((h1) => {
      h1.addEventListener("click", clickListener);
    });
  }

  function clickListener(e) {
    console.log(e.target);
    let parent = e.target.closest(".section-holder");
    parent.querySelector("p").classList.toggle("hidden");

    let image = parent.querySelector("img");
    if (image.src.match("images/icon-minus.svg")) {
      image.src = "images/icon-plus.svg";
    } else {
      image.src = "images/icon-minus.svg";
    }
  }
})();

// function Toogle(e){
//   let image= document.getElementsByClassName('icon')[0];
//   if (image.src.match("images/icon-minus.svg")) {
//   image.src="images/icon-plus.svg";
//     } else {
//     image.src ="images/icon-minus.svg";
//     }
// }
