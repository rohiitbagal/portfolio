let tabLinks = document.getElementsByClassName("links");
let tabContents = document.getElementsByClassName("contents");

function opentab(tabname) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active");
}

let sideMenu = document.getElementById("sidemenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}
