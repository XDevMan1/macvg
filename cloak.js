

document.addEventListener("keydown", (event) => {
  let panicKeys = localStorage.getItem("panic");
  let href = localStorage.getItem("href");
  if (panicKeys) {
    if (href) {
      let keys = panicKeys.split(",");
      if (keys.length >= 2 && event.key === keys[0]) {
        let key1Pressed = true;
        document.addEventListener("keydown", (event) => {
          if (event.key === keys[1] && key1Pressed) {
            window.location.href = href;
          }
        });
        document.addEventListener("keyup", (event) => {
          if (event.key === keys[0]) {
            key1Pressed = false;
          }
        });
      } else if (keys.length >= 2 && event.key === keys[1]) {
        let key1Pressed = true;
        document.addEventListener("keydown", (event) => {
          if (event.key === keys[0] && key1Pressed) {
            window.location.href = href;
          }
        });
        document.addEventListener("keyup", (event) => {
          if (event.key === keys[0]) {
            key1Pressed = false;
          }
        });
      } else if (keys.length === 1 && event.key === keys[0]) {
        window.location.href = href;
      }
    } else {
      let href = "https://www.google.com";
      let keys = panicKeys.split(",");
      if (keys.length >= 2 && event.key === keys[0]) {
        let key1Pressed = true;
        document.addEventListener("keydown", (event) => {
          if (event.key === keys[1] && key1Pressed) {
            window.location.href = href;
          }
        });
        document.addEventListener("keyup", (event) => {
          if (event.key === keys[0]) {
            key1Pressed = false;
          }
        });
      } else if (keys.length >= 2 && event.key === keys[1]) {
        let key1Pressed = true;
        document.addEventListener("keydown", (event) => {
          if (event.key === keys[0] && key1Pressed) {
            window.location.href = href;
          }
        });
        document.addEventListener("keyup", (event) => {
          if (event.key === keys[0]) {
            key1Pressed = false;
          }
        });
      } else if (keys.length === 1 && event.key === keys[0]) {
        window.location.href = href;
      }
    }
  } else {
    localStorage.setItem("panic", "`");
    let keys = panicKeys.split(",");
    if (keys.length >= 2 && event.key === keys[0]) {
      let key1Pressed = true;
      document.addEventListener("keydown", (event) => {
        if (event.key === keys[1] && key1Pressed) {
          window.location.href = href;
        }
      });
      document.addEventListener("keyup", (event) => {
        if (event.key === keys[0]) {
          key1Pressed = false;
        }
      });
    } else if (keys.length >= 2 && event.key === keys[1]) {
      let key1Pressed = true;
      document.addEventListener("keydown", (event) => {
        if (event.key === keys[0] && key1Pressed) {
          window.location.href = href;
        }
      });
      document.addEventListener("keyup", (event) => {
        if (event.key === keys[0]) {
          key1Pressed = false;
        }
      });
    } else if (keys.length === 1 && event.key === keys[0]) {
      window.location.href = href;
    }
  }
});

const google = ["Google", "/macvg/google.png"];
const canva = ["Home - Canva", "/macvg/canva.png"];
const clever = ["Clever | Portal", "/macvg/clever.png"];
const schoology = ["Home | Schoology", "/macvg/schoology.png"];
const newTab = ["New Tab", "/macvg/new-tab.png"];

function google1() {
  localStorage.setItem("title", JSON.stringify(google));
}

function canva1() {
  localStorage.setItem("title", JSON.stringify(canva));
}

function clever1() {
  localStorage.setItem("title", JSON.stringify(clever));
}

function schoology1() {
  localStorage.setItem("title", JSON.stringify(schoology));
}

function newTab1() {
  localStorage.setItem("title", JSON.stringify(newTab));
}

function unCloak() {
  localStorage.setItem("title", "");
}

function panic() {
  const button = document.getElementById("name2").value;
  localStorage.setItem("panic", button);
}

function url() {
  const inputurl = document.getElementById("name3").value;
  localStorage.setItem("href", inputurl);
}

function cloaking() {
  const name = document.getElementById("name").value;
  localStorage.title = name;
}

function changeName() {
  if (localStorage.title !== "") {
    const pageTon = document.querySelector(".cloak");
    const favicon = document.querySelector(".favicon");
    if (localStorage.title != null) {
      let all = localStorage.getItem("title");
      if (
        all.includes("Clever") ||
        all.includes("Google") ||
        all.includes("Canva") ||
        all.includes("Schoology") ||
        all.includes("New Tab")
      ) {
        let alln = JSON.parse(all);
        let title = alln[0];
        let image = alln[1];
        pageTon.innerHTML = title;
        favicon.outerHTML = `<link class="favicon" rel="icon" type="image/x-icon" href="${image}" />`;
      } else {
        pageTon.innerHTML = all;
      }
    }
  }
}
setInterval(changeName, 100);

document.addEventListener("DOMContentLoaded", function () {
  let thing23 = document.getElementById("current");
  let panicKeys = localStorage.getItem("panic");
  let href = localStorage.getItem("href");
  const chat = document.getElementsByTagName("a");
  let thing = Array.from(chat);
  thing.forEach(function (things) {
    if (things.innerHTML === "Chat") {
      things.style.backgroundColor = "red";
      things.style.borderRadius = "15px";
      things.style.paddingBlock = "8px";
      things.style.position = "absolute";
      things.style.right = "250px";
      things.style.textShadow = "0px 0px 10px black"
      things.style.transition = "background-color 1s ease";
      setInterval(function () {
        color(things);
      }, 1500);
      
    }
  })
  thing23.innerHTML =
    "Current key: " + panicKeys + "<br>" + " Redirecting: " + href;
  thing23.style.fontWeight = "bold";
  thing23.style.color = "gold";
  function color(element) {
    element.classList.toggle("glow");
  }
});