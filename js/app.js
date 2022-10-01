"use strict";
////// Phần SIDE
const news = document.querySelectorAll(".news");
console.log(news);

news.forEach((dropdown) => {
  const title = dropdown.querySelector(".news-title");
  const content = dropdown.querySelector(".news-content");
  const caret = dropdown.querySelector(".caret");
  const icons = dropdown.querySelector(".icons");

  title.addEventListener("click", () => {
    content.classList.toggle("news-content-open");
    caret.classList.toggle("right");
    caret.classList.toggle("down");
    icons.classList.toggle("icons-active");
    title.classList.toggle("active");
  });
});
