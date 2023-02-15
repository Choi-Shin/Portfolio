import { setHeight } from "../main/function.js";
import { Observer } from "../main/observer.js";
import { typing } from "/intro.js";
import { skillAdd } from "/Skills.js";
import { profile } from "/profile.js";
import { project } from "/project.js";
setHeight();

let observer = new Observer("hidden", "show");
observer.observe();
skillAdd();
profile();
$(function () {
  project();
});
setTimeout(typing, 500);
let page = 0;
let lastPage = $("section").length;
let flag = true;
let $html = $("html");

$html.animate({ scrollTop: 0 }, 10);
let pageName = ["intro", "skills", "profile", "projects", "contact"];
$(window).on("wheel", (e) => {
  if ($html.is(":animated")) {
    return;
  }
  if (flag) {
    if (e.originalEvent.deltaY > 0) {
      if (page == lastPage - 1) return;
      page++;
    } else if (e.originalEvent.deltaY < 0) {
      if (page == 0) return;
      page--;
    }
    flag = false;
  }

  setHeight();
  let posTop = page * $(window).height();
  history.pushState(null, null, `/#${pageName[page]}`);
  window.dispatchEvent(new Event("locationchange"));
  $html.animate({ scrollTop: posTop }, 900);
  setTimeout(() => {
    flag = true;
  }, 700);
});

let touchStart;
$("html, body").bind("touchstart", function (e) {
  e.stopPropagation();
  touchStart = e.originalEvent.touches[0].clientY;
});

$("html, body").bind("touchend", function (e) {
  e.stopPropagation();
  if ($html.is(":animated")) return;
  var touchEnd = e.originalEvent.changedTouches[0].clientY;

  if (touchStart > touchEnd) {
    if (page == lastPage - 1) return;
    page++;
  } else if (touchStart < touchEnd) {
    if (page == 0) return;
    page--;
  }
  setHeight();
  let posTop = page * $(window).height();
  history.replaceState(null, null, `/#${pageName[page]}`);
  window.dispatchEvent(new Event("locationchange"));
  $html.animate({ scrollTop: posTop });
});

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

$(".navLi").on("click", (e) => {
  location.replace(`/#${e.target.textContent.trim()}`);
  window.dispatchEvent(new Event("locationchange"));
});

window.addEventListener("locationchange", (e) => {
  let path = e.target.location.href.split("#")[1];
  let page;
  for (let i = 0; i < pageName.length; i++) {
    if (pageName[i] === path) {
      page = i;
    }
  }
  const skill = document.querySelector("#skills");
  const profile = document.querySelector("#profile");
  if (page == 1) {
    skill.dispatchEvent(new Event("ani", { bubbles: true }));
    skill.dispatchEvent(new Event("font", { bubbles: true }));
  } else if (page == 2) {
    profile.dispatchEvent(new Event("showing", { bubbles: true }));
  } else {
    profile.dispatchEvent(new Event("pageChanged", { bubbles: true }));
    skill.dispatchEvent(new Event("refresh", { bubbles: true }));
  }
  let posTop = page * $(window).height();
  $html.animate({ scrollTop: posTop });
  const navLi = document.querySelectorAll(".navLi");
  navLi.forEach((el) => {
    if (el.classList.contains(path)) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });
});
