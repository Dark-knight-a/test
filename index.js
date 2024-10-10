window.addEventListener("scroll", (e) => {
   let position = window.scrollY;
   if (position > 230) {
      document.querySelector(".left-card").classList.add("move-right");
      document.querySelector(".middle-card").classList.add("move-center");
      document.querySelector(".right-card").classList.add("move-left");
   } else {
      document.querySelector(".left-card").classList.remove("move-right");
      document.querySelector(".middle-card").classList.remove("move-center");
      document.querySelector(".right-card").classList.remove("move-left");
   }
});
