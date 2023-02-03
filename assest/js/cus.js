const amazing = document.querySelectorAll(".amazing");
const amazingItem = document.querySelectorAll(".amazing-item");
const icons = document.querySelectorAll(".icon");
const showMmobildMenuBox = document.querySelector(".show-mobild-menu-box");
// const menuIcon = document.querySelector(".menu-icon");

amazing.forEach((ee, index) => {
  ee.addEventListener("click", () => {
    amazingItem[index].classList.toggle("hidden");
    amazingItem[index].classList.toggle("opacity-0");
    ee.classList.toggle("bg-slate-100");
    icons[index].classList.toggle("rotate-180");
  });
});

const menuIcon = () => {
  showMmobildMenuBox.classList.toggle("hidden");
};

// switchImage & active icon

function imgChangeOne(imageOne, imageTwo, darkImgOne, darkImgTwo) {
  document.querySelector(".imgOne").src = imageOne;
  document.querySelector(".imgTwo").src = imageTwo;
  document.querySelector(".darkImgOne").src = darkImgOne;
  document.querySelector(".darkImgTwo").src = darkImgTwo;
}

var activeIcons = document.getElementsByClassName("icons");
for (var i = 0; i < activeIcons.length; i++) {
  activeIcons[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeIcon");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeIcon", "");
    }
    this.className += " activeIcon";
  });
}

const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch");
const darkText = document.querySelector("#dark-text");
const darkChangeText = document.querySelector("#dark-text-change");
const html = document.documentElement;
var toggle = document.getElementById("toggle");
var whiteImg = document.getElementById("whiteImg");
var darkImg = document.getElementById("darkImg");
let isDarkMode = false;

const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  switchTheme();
};

const toDark = () => {
  darkImg.classList.remove("hidden");
  whiteImg.classList.add("hidden");
  darkSwitchIcon.classList.add("translate-x-full", "rotate-[360deg]");
  darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-900"></i>`;
  darkText.classList.add("-translate-x-7");
  darkText.innerText = "ON";
};

const toLight = () => {
  darkImg.classList.add("hidden");
  whiteImg.classList.remove("hidden");
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

//first hover card
const liveUpdate = document.getElementById("liveUpdate");
const firstImg1 = document.getElementById("firstImg1");
const firstImg2 = document.getElementById("firstImg2");
const firstImg3 = document.getElementById("firstImg3");
const textHiddenFirst = document.getElementById("textHiddenFirst");
const live = document.getElementById("live");

liveUpdate.addEventListener("pointerenter", (event) => {
  liveUpdate.classList.add("shadow-2xl");
  firstImg1.classList.add("hidden");
  firstImg2.classList.add("md:block");
  firstImg3.classList.remove("hidden");
  textHiddenFirst.classList.remove("md:hidden");
  live.classList.add("text-blue-500");
});
liveUpdate.addEventListener("pointerleave", (event) => {
  liveUpdate.classList.remove("shadow-2xl");
  firstImg1.classList.remove("hidden");
  firstImg2.classList.remove("md:block");
  firstImg3.classList.add("hidden");
  textHiddenFirst.classList.add("md:hidden");
  live.classList.remove("text-blue-500");
});
//second hover card
const nativeBuild = document.getElementById("nativeBuild");
const secondImg1 = document.getElementById("secondImg1");
const secondImg2 = document.getElementById("secondImg2");
const secondImg3 = document.getElementById("secondImg3");
const textHiddenSecond = document.getElementById("textHiddenSecond");
const native = document.getElementById("native");

nativeBuild.addEventListener("pointerenter", (event) => {
  nativeBuild.classList.add("shadow-2xl");
  secondImg1.classList.add("hidden");
  secondImg2.classList.add("md:block");
  secondImg3.classList.remove("hidden");
  textHiddenSecond.classList.remove("md:hidden");
  native.classList.add("text-blue-500");
});
nativeBuild.addEventListener("pointerleave", (event) => {
  nativeBuild.classList.remove("shadow-2xl");
  secondImg1.classList.remove("hidden");
  secondImg2.classList.remove("md:block");
  secondImg3.classList.add("hidden");
  textHiddenSecond.classList.add("md:hidden");
  native.classList.remove("text-blue-500");
});
//third hover card
const appPublishing = document.getElementById("appPublishing");
const thirdImg1 = document.getElementById("thirdImg1");
const thirdImg2 = document.getElementById("thirdImg2");
const thirdImg3 = document.getElementById("thirdImg3");
const textHiddenthird = document.getElementById("textHiddenThird");
const app = document.getElementById("app");

appPublishing.addEventListener("pointerenter", (event) => {
  appPublishing.classList.add("shadow-2xl");
  thirdImg1.classList.add("hidden");
  thirdImg2.classList.add("md:block");
  thirdImg3.classList.remove("hidden");
  textHiddenThird.classList.remove("md:hidden");
  app.classList.add("text-blue-500");
});
appPublishing.addEventListener("pointerleave", (event) => {
  appPublishing.classList.remove("shadow-2xl");
  thirdImg1.classList.remove("hidden");
  thirdImg2.classList.remove("md:block");
  thirdImg3.classList.add("hidden");
  textHiddenThird.classList.add("md:hidden");
  app.classList.remove("text-blue-500");
});
//fourth hover card
const cloudCli = document.getElementById("cloudCli");
const fourthImg1 = document.getElementById("fourthImg1");
const fourthImg2 = document.getElementById("fourthImg2");
const fourthImg3 = document.getElementById("fourthImg3");
const textHiddenFourth = document.getElementById("textHiddenFourth");
const cloud = document.getElementById("cloud");

cloudCli.addEventListener("pointerenter", (event) => {
  cloudCli.classList.add("shadow-2xl");
  fourthImg1.classList.add("hidden");
  fourthImg2.classList.add("md:block");
  fourthImg3.classList.remove("hidden");
  textHiddenFourth.classList.remove("md:hidden");
  cloud.classList.add("text-blue-500");
});
cloudCli.addEventListener("pointerleave", (event) => {
  cloudCli.classList.remove("shadow-2xl");
  fourthImg1.classList.remove("hidden");
  fourthImg2.classList.remove("md:block");
  fourthImg3.classList.add("hidden");
  textHiddenFourth.classList.add("md:hidden");
  cloud.classList.remove("text-blue-500");
});

//fifth hover card
const buildCli = document.getElementById("buildCli");
const fifthImg1 = document.getElementById("fifthImg1");
const fifthImg2 = document.getElementById("fifthImg2");
const fifthImg3 = document.getElementById("fifthImg3");
const textHiddenfifth = document.getElementById("textHiddenfifth");
const build = document.getElementById("build");

buildCli.addEventListener("pointerenter", (event) => {
  buildCli.classList.add("shadow-2xl");
  fifthImg1.classList.add("hidden");
  fifthImg2.classList.add("md:block");
  fifthImg3.classList.remove("hidden");
  textHiddenfifth.classList.remove("md:hidden");
  build.classList.add("text-blue-500");
});
buildCli.addEventListener("pointerleave", (event) => {
  buildCli.classList.remove("shadow-2xl");
  fifthImg1.classList.remove("hidden");
  fifthImg2.classList.remove("md:block");
  fifthImg3.classList.add("hidden");
  textHiddenfifth.classList.add("md:hidden");
  build.classList.remove("text-blue-500");
});

//sixth hover card
const secCli = document.getElementById("secCli");
const sixthImg1 = document.getElementById("sixthImg1");
const sixthImg2 = document.getElementById("sixthImg2");
const sixthImg3 = document.getElementById("sixthImg3");
const textHiddensixth = document.getElementById("textHiddensixth");
const sec = document.getElementById("sec");

secCli.addEventListener("pointerenter", (event) => {
  secCli.classList.add("shadow-2xl");
  sixthImg1.classList.add("hidden");
  sixthImg2.classList.add("md:block");
  sixthImg3.classList.remove("hidden");
  textHiddensixth.classList.remove("md:hidden");
  sec.classList.add("text-blue-500");
});
secCli.addEventListener("pointerleave", (event) => {
  secCli.classList.remove("shadow-2xl");
  sixthImg1.classList.remove("hidden");
  sixthImg2.classList.remove("md:block");
  sixthImg3.classList.add("hidden");
  textHiddensixth.classList.add("md:hidden");
  sec.classList.remove("text-blue-500");
});

//seventh hover card
const deliCli = document.getElementById("deliCli");
const seventhImg1 = document.getElementById("seventhImg1");
const seventhImg2 = document.getElementById("seventhImg2");
const seventhImg3 = document.getElementById("seventhImg3");
const textHiddenseventh = document.getElementById("textHiddenseventh");
const deli = document.getElementById("deli");

deliCli.addEventListener("pointerenter", (event) => {
  deliCli.classList.add("shadow-2xl");
  seventhImg1.classList.add("hidden");
  seventhImg2.classList.add("md:block");
  seventhImg3.classList.remove("hidden");
  textHiddenseventh.classList.remove("md:hidden");
  deli.classList.add("text-blue-500");
});
deliCli.addEventListener("pointerleave", (event) => {
  deliCli.classList.remove("shadow-2xl");
  seventhImg1.classList.remove("hidden");
  seventhImg2.classList.remove("md:block");
  seventhImg3.classList.add("hidden");
  textHiddenseventh.classList.add("md:hidden");
  deli.classList.remove("text-blue-500");
});



// activeButton
function activeButton() {
  let activeButtons = document.querySelectorAll(".buttons");
  let activeContent = document.querySelectorAll(".activeContent");

  activeButtons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      activeButtons.forEach((icon) => {
        icon.classList.remove("activeButton");
      });
      icon.classList.add("activeButton");
      activeContent.forEach((content) => content.classList.add("hidden"));
      activeContent[index].classList.remove("hidden");
    });
  });
}

// languageIconActive
function languageIconActive() {
  let languageIcons = document.querySelectorAll(".languageIcons");
  let languageContent = document.querySelectorAll(".languageContent");

  languageIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      languageIcons.forEach((icon) => {
        icon.classList.remove("languageIconActive");
      });
      icon.classList.add("languageIconActive");
      languageContent.forEach((content) =>
        content.classList.remove("activeCode")
      );
      languageContent[index].classList.add("activeCode");
    });
  });
}

// Navbar Fixed and Animation
const fixedNav = document.getElementById("fixedNav");
var waypoint = new Waypoint({
  element: document.getElementById("main"),
  handler: function (direction) {
    if (direction === "down") {
      fixedNav.classList.add(
        "fixed",
        "top-0",
        "animate__fadeInDown",
        "shadow-lg",
        "w-full",
        "left-0"
      );
      fixedNav.classList.remove("relative");
    } else {
      fixedNav.classList.remove(
        "fixed",
        "top-0",
        "animate__fadeInDown",
        "shadow-lg",
        "w-full",
        "left-0"
      );
      fixedNav.classList.add("relative");
    }
  },
  offset: "20%",
});
