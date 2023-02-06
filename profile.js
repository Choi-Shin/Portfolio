const response = await fetch("./data/profile.json")
  .then((r) => {
    return r.json();
  })
  .catch((err) => {
    console.log(err);
  });

export function profile() {
  const head = document.querySelector(".profileHead");
  const imgCon = document.createElement("div");
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
    div.innerHTML = key[i] + " : " + profile[key[i]];
    info.appendChild(div);
  }
  conWrapper.appendChild(info);
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
    li.innerHTML = timeline[i];
    ul.appendChild(li);
  }
  content.appendChild(ul);
}
