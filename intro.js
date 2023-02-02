import { Mobile } from "./function.js";

let announcement = [
  "안녕하세요.",
  "간결하지만\n강력한",
  "명확하지만\n유연한 코드를",
  "고민하는\n풀스택 개발자\n신초이 입니다.",
];

if (Mobile()) {
  announcement = [
    "안녕하세요.",
    "간결하지만\n강력한",
    "명확하지만\n유연한 코드를",
    "고민하는\n 풀스택 개발자\n신초이 입니다.",
  ];
}

const $announcement = document.querySelector(".announcement");
const $againBtn = $(".watchAgain");
$againBtn.hide();
$againBtn.on("click", (e) => {
  e.preventDefault();
  i = 0;
  $againBtn.hide();
  $announcement.innerHTML = "";
  typing();
});
const speed = 100;
const audio = new Audio();
audio.src = "./assets/audio/keyboard.mp3";
audio.muted = true;

let i = 0;
export const typing = async () => {
  await wait(400);
  const letter = announcement[i].split("");
  const accent = ["강", "력", "한"];
  // audio.play();
  while (letter.length) {
    console.log(audio);
    audio.muted = false;
    audio.play();
    let l = letter.shift();
    if (l === "\n") {
      $announcement.innerHTML += "<br/>";
    } else {
      if (accent.includes(letter[0])) {
        await wait(speed * 3);
        $announcement.innerHTML += l;
      } else if (l === "\n") {
        continue;
      } else {
        await wait(speed);
        $announcement.innerHTML += l;
      }
    }
  }
  audio.pause();
  await wait(400);

  if (i == announcement.length - 1) {
    $(".watchAgain").show();
  } else {
    remove();
  }
};
const remove = async () => {
  const letter = announcement[i].split("");
  letter.splice(letter.indexOf("\n"), 1, "<br/>");
  while (letter.length) {
    await wait(speed * 0.6);

    letter.pop();
    $announcement.innerHTML = letter.join("");
  }

  i = !announcement[i + 1] ? -1 : i + 1;
  if (i == -1) {
    $(".watchAgain").show();
  }
  typing();
};

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.style.width = "100vw";
c.style.height = "100vh";
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 600, 600);
