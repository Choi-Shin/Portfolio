import { createRect, makeBevelBox, writeText } from "./functions/functions.js";
import { getCredit } from "../helper/credit.js";
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
let data = JSON.parse(
  await getCredit()
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err))
);
export function credit() {
  show();
}

function show() {
  draw();
}

async function draw() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  createRect(0, 0, canvas.width, canvas.height, "black");
  writeText(
    "3rem",
    "arial",
    "white",
    "Credits",
    canvas.width / 3,
    canvas.height / 6
  );
  let i = 0;
  for (var d in data) {
    writeText(
      "2rem",
      "arial",
      "white",
      d,
      d.length > 5 ? 190 : 200,
      180 + i * 100
    );
    writeText(
      "1.5rem",
      "arial",
      "white",
      data[d],
      data[d].length > 10 ? 100 : 190,
      220 + i * 100
    );
    i++;
  }
  makeBevelBox(4, "white", 75, canvas.height - 70, 150, 40);
  makeBevelBox(4, "white", 280, canvas.height - 70, 150, 40);
  writeText("1.3rem", "arial", "#00FF42", "Menu", 125, canvas.height - 45);
  writeText(
    "1.3rem",
    "arial",
    "#00FF42",
    "Game Start",
    303,
    canvas.height - 45
  );
}
