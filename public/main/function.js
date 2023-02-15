export function setHeight() {
  $("section").height(window.innerHeight - $(".nav").height() + "px");
}

export function Mobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

const observeUrlChange = () => {
  let oldHref = document.location.href;
  const body = document.querySelector("body");
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;
        const navLi = document.querySelectorAll(".navLi");
        navLi.forEach((el) => {
          if (el.classList.contains(oldHref.split("#")[1])) {
            el.classList.add("selected");
          } else el.classList.remove("selected");
        });
      }
    });
  });
  observer.observe(body, { childList: true, subtree: true });
};

export default observeUrlChange;
