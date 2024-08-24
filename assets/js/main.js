// stop tap action
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 9) {
    event.preventDefault();
  }
});

// toggle theme
const input = document.querySelector(".toggle-button input");
const toggleSwitch = document.querySelector(".toggle-button");

toggleSwitch.addEventListener("click", () => {
  if (input.checked == true) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
});

// open sections

const sectionsHeader = document.querySelectorAll(".section h3"),
  sections = document.querySelectorAll(".section");

for (let i = 0; i < sectionsHeader.length; i++) {
  sectionsHeader[i].addEventListener("click", () => {
    sections[i].classList.toggle("open");
  });
}

// un display loading page
const loadingPage = document.querySelector(".loader-page");
setTimeout(() => {
  loadingPage.style.cssText = "opacity: 0; z-index: -111";
}, 1500);

//hide screen in small devices

window.addEventListener("resize", hideScreen);
window.addEventListener("load", hideScreen);

const hideWebsite = document.querySelector(".block-medium-screen");
function hideScreen() {
  let windowScreen = window.innerWidth;
  if (windowScreen <= 1000) {
    hideWebsite.style.cssText = "visibility: visible !important";
  } else {
    hideWebsite.style.cssText = "visibility: hidden !important";
  }
}
