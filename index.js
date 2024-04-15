//스크롤하면 투명도 변경

const observer = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    } else {
      box.target.style.opacity = 0;
    }
  });
});

const slideDiv = document.querySelectorAll(".section");

observer.observe(slideDiv[0]);
observer.observe(slideDiv[1]);
observer.observe(slideDiv[2]);

//위치 이동
const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

const historyBtn = document.querySelector("#historyBtn");
historyBtn.addEventListener("click", () => {
  window.scrollTo({ top: 651, left: 0, behavior: "smooth" });
});
const productBtn = document.querySelector("#productBtn");
productBtn.addEventListener("click", () => {
  window.scrollTo({ top: 1302, left: 0, behavior: "smooth" });
});

//section 3 캐러셀
const carouselSlide = document.querySelector(".slide_carrousel");
const carouselContents = document.querySelectorAll(".slide_box");

const prevButton = document.querySelector("#prev_button");
const nextButton = document.querySelector("#next_button");

let counter = 1;
// const size = carouselContents[0].clientWidth;
const size = 240;
console.log(counter);

// carouselSlide.style.transform = "translateX(" +size * counter + "px)";

prevButton.addEventListener("click", () => {
  if (counter >= carouselContents.length - 4) return;
  carouselSlide.style.transition = "transform 0.2s ease-in-out";
  counter++;
  console.log("prev", counter);
  carouselSlide.style.transform = "translateX(" + size * counter + "px)";
});

nextButton.addEventListener("click", () => {
  if (counter <= -2) return;
  carouselSlide.style.transition = "transform 0.2s ease-in-out";
  counter--;
  console.log(counter);

  carouselSlide.style.transform = "translateX(" + size * counter + "px)";
});
