let menu = document.querySelector(".menu");
let [openMobile, closeMobile] = menu.children;
// console.log(openMobile, closeMobile);
openMobile.classList.add("hide");
const nav = document.querySelector("ul.nav-links");
Array.from(menu.children).forEach((e) => {
  e.addEventListener("click", () => {
    openMobile.classList.toggle("hide");
    openMobile.classList.toggle("show");

    closeMobile.classList.toggle("hide");
    const navList = Array.from(openMobile.classList);
    if (navList.includes("show")) {
      nav.style.top = "100%";
    } else {
      nav.style.top = "-400%";
    }
  });
});
