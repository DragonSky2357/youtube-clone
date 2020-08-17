const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");
const thumbsUp = document.querySelector(".info .actions .fa-thumbs-up");
const thumbsDown = document.querySelector(".info .actions .fa-thumbs-down");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

thumbsUp.addEventListener("click", () => {
  thumbsUp.classList.toggle("active");
});

thumbsDown.addEventListener("click", () => {
  thumbsDown.classList.toggle("active");
});
