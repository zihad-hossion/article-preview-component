const shareBtn = document.querySelector("#shareImg");
const social = document.querySelector("#social-link");

shareBtn.addEventListener("click", () => {
  social.classList.toggle("hidden");
});


const mobBtn = document.querySelector(".mob-share");
const mobSocial = document.querySelector("#mob-link");

shareBtn.addEventListener("click", () => {
  mobSocial.classList.toggle("hidden");
});
mobBtn.addEventListener("click", () => {
  mobSocial.classList.toggle("hidden");
});
