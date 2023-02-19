const response = await fetch("./main/data/profile.json")
  .then((r) => {
    return r.json();
  })
  .catch((err) => {
    console.log(err);
  });

export function profile() {
  const title = document.querySelector(".profileTitle");
  title.innerHTML = "<h2>Profile</h2>";
  const head = document.querySelector(".profileHead");
  const imgCon = document.createElement("div");
  imgCon.className = "imgCon";
  const img = document.createElement("img");
  img.className = "profileImg";
  img.src = response.img;
  imgCon.appendChild(img);
  head.appendChild(imgCon);
  const detail = response.content.introduce;
  const profile = response.content.profile;
  const key = Object.keys(profile);
  const conWrapper = document.createElement("div");
  conWrapper.className = "introWrapper";
  const info = document.createElement("div");
  info.className = "info";
  for (let i in key) {
    const div = document.createElement("div");
    div.innerHTML =
      "&#60;" +
      key[i] +
      "&#62;" +
      profile[key[i]] +
      "&#60;/" +
      key[i] +
      "&#62;";
    info.appendChild(div);
  }
  imgCon.appendChild(info);
  const introduce = document.createElement("div");
  introduce.className = "introduce";
  let intro = "";
  for (let d in detail) {
    intro += detail[d];
    intro += "<br>";
  }
  introduce.innerHTML = intro;
  conWrapper.appendChild(introduce);
  head.appendChild(conWrapper);

  const content = document.querySelector(".profileContent");
  const timeline = response.content.timeline;
  const ul = document.createElement("ul");
  ul.className = "timelineList";
  for (let i in timeline) {
    const li = document.createElement("li");
    li.className = "hidden";
    li.innerHTML = timeline[i];
    ul.appendChild(li);
  }
  content.appendChild(ul);
}

function boxHighlight(ele) {
  ele.addClass("highlight");
}
function boxUnHighlight(ele) {
  ele.removeClass("highlight");
}
$(function () {
  const info = $(".info");
  const intro = $(".introduce");
  info.on("mouseover", () => boxHighlight(info));
  info.on("mouseleave", () => boxUnHighlight(info));
  intro.on("mouseover", () => boxHighlight(intro));
  intro.on("mouseleave", () => boxUnHighlight(intro));
});

let first = false;
function listAnimation() {
  first = true;
  const list = document.querySelectorAll(".timelineList > li");
  list.forEach((el, index) => {
    setTimeout(() => {
      list[index].classList.add("show");
    }, index * 200);
  });
}

$(".profileWrapper").on("mouseover", () => {
  if (!first) {
    listAnimation();
  } else {
    return false;
  }
});

$("#profile").on("pageChanged", () => {
  first = false;
  const li = document.querySelectorAll(".timelineList > li");
  li.forEach((el) => {
    el.classList.remove("show");
  });
});
$("#profile").on("showing", () => {
  first = false;
  listAnimation();
});
