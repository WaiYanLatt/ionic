// dropDown
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

const dropdownButton1 = document.getElementById("dropdownButton1");
const dropdownMenu1 = document.getElementById("dropdownMenu1");
dropdownButton1.addEventListener("click", () => {
  dropdownMenu1.classList.toggle("hidden");
});

const dropdownButton2 = document.getElementById("dropdownButton2");
const dropdownMenu2 = document.getElementById("dropdownMenu2");
dropdownButton2.addEventListener("click", () => {
  dropdownMenu2.classList.toggle("hidden");
});

// mobile Menu open and close
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileMenu.classList.add("animate__backInLeft");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mobileMenu.classList.remove("animate__backInLeft");
});
const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch");
const darkText = document.querySelector("#dark-text");
const darkChangeText = document.querySelector("#dark-text-change");
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  switchTheme();
};

const toDark = () => {
  darkSwitchIcon.classList.add("translate-x-full", "rotate-[360deg]");
  darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-900"></i>`;
  // darkChangeText.innerText = 'Dark'
  darkSwitch.classList.remove("bg-slate-900");
  darkSwitch.classList.add("bg-slate-900");
  localStorage.setItem("data-theme", "dark");
  html.classList.add("dark");
  darkText.classList.add("-translate-x-7");
  darkText.innerText = "ON";
};

const toLight = () => {
  darkSwitchIcon.classList.remove("translate-x-full", "bg-slate-900");
  // darkChangeText.innerText = 'Light'
  darkSwitch.classList.remove("bg-slate-900");
  darkSwitch.classList.add("bg-slate-900");
  localStorage.removeItem("data-theme");
  html.classList.remove("dark");
  darkText.classList.remove("-translate-x-7");
  darkText.innerText = "OFF";
  darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  setTimeout(() => {
    darkSwitchIcon.classList.remove("rotate-[360deg]");
  }, 200);
};

const switchTheme = () => {
  isDarkMode ? toDark() : toLight();
  // or
  // if (isDarkMode) {
  //     toDark()
  // } else {
  //     toLight()
  // }
};

// If you do reload the webpage,
// doesn't change you choose theme.
// This `dataTheme` function save permentaly choose theme.

const dataTheme = localStorage.getItem("data-theme");

dataTheme === "dark" ? toDark() : toLight();
// or
// if(dataTheme === 'dark') {
//     toDark()
// } else {
//     toLight()
// }
