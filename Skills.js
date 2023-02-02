// import data from "./skill.json" assert { type: "json" };
const states = { main: "Main", sub: "Sub" };
let state = states.main;

const response = await fetch("./data/skill.json")
  .then((r) => {
    return r.json();
  })
  .catch((err) => {
    console.log(err);
  });

let list = document.querySelector(".skillList");
export async function skillAdd() {
  const stackKeys = Object.keys(response);
  for (let j = 0; j < stackKeys.length; j++) {
    const container = document.createElement("div");
    container.className = "skillTable";
    const left = document.createElement("div");
    const right = document.createElement("div");
    const title = document.createElement("h4");
    title.className = "stackTitle";
    title.innerText = stackKeys[j];
    container.append(title);
    for (let k in response[stackKeys[j]]) {
      const data = response[stackKeys[j]][k];
      const skillCon = document.createElement("div");
      skillCon.className = "skillCon";
      const div = document.createElement("div");
      div.className = "skillName";
      const img = document.createElement("img");
      const skill = document.createElement("span");
      const spanDiv = document.createElement("div");
      spanDiv.className = "spanDiv";
      spanDiv.appendChild(skill);
      const bar = document.createElement("div");
      const progress = document.createElement("div");
      progress.style.width = data.progress + "%";
      // progress.style.setProperty("--progress", data.progress);
      progress.className = "progress";
      bar.appendChild(progress);
      bar.className = "progressBar";
      skill.innerText = data.skill;
      img.src = data.image;
      div.append(img);
      div.append(spanDiv);
      skillCon.append(div);
      skillCon.append(bar);
      if (j % 2 == 0) {
        left.append(skillCon);
        container.append(left);
      } else {
        right.append(skillCon);
        container.append(right);
      }
    }
    list.append(container);
  }
}

const skills = document.querySelector("#skills");
skills.addEventListener("ani", () => {
  const progress = document.querySelectorAll(".progress");
  const progressBar = document.querySelectorAll(".progressBar");
  progress.forEach((el) => {
    el.classList.add("progress-moved");
  });
  progressBar.forEach((el) => {
    el.classList.add("progress-moved");
  });
  console.log("start");
});
skills.addEventListener("refresh", () => {
  const progress = document.querySelectorAll(".progress-moved");
  progress.forEach((el) => {
    el.classList.remove("progress-moved");
    void el.offsetWidth;
  });
  console.log("새로고침");
});

skills.addEventListener("font", () => {
  const pageCon = document.querySelector(".pageContainer");
  const skillCon = document.querySelector(".skillContainer");
  skillCon.classList.add("anim");
  setTimeout(() => {
    skillCon.classList.remove("anim");
  }, 2000);
  console.log("새로고침");
});
