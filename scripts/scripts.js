let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(() => {
    loader.remove();
  }, 900);
});

//container
const burger = document.querySelector(".burger");
const container = document.querySelector(".container");
const screens = document.querySelectorAll(".screen");

burger.addEventListener("click", () => {
  container.classList.toggle("active");
});

function replaceBg(id) {
  const bg = document.getElementById(id);
  screens.forEach((screen) => {
    screen.style.display = "none";
  });
  bg.style.display = "block";
}

//change background

function throttle(callback, delay) {
  let isThrottle = false;
  let savedArgs;
  let savedThis;
  function wrapper() {
    if (isThrottle) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    callback.apply(this, arguments);

    isThrottle = true;

    setTimeout(function () {
      isThrottle = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, delay);
  }
  return wrapper;
}

function changeBg() {
  const links = document.querySelectorAll(".link");
  const throttleUpdate = throttle(replaceBg, 650);

  links.forEach((link, index) => {
    link.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      throttleUpdate(e.target.dataset.link);
    });
    link.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.toggle("active");
    });
  });
  screens.forEach((screen) => {
    screen.style.display = "none";
    screens[0].style.display = "block";
  });
}
changeBg();

//search console
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clear = document.querySelector(".clear");

icon.onclick = function () {
  search.classList.toggle("active");
};

clear.onclick = function () {
  document.getElementById("mySearch").value = "";
};
