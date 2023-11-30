
const nav = document.querySelector(".header"),
  searchIcon = document.querySelector("#searchIcon");

  searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
  })
// ==========================================================================//
// =========================================================================//
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card")
const arrowBtns = document.querySelectorAll(".wrapper i");

// =======================================================================//
// ================== 2 slider ===============//
const carousel1 = document.querySelector(".carousel1"),
firstImg = carousel1.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".slider-continer i");

const showHideIcons = () => {
    arrowIcons[0].style.display = carousel1.scrollLeft == 0 ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
// // //  //  //  //  //  //  //  //  //  //




// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// =======================================================================//
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

