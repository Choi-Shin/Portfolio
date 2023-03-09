const response = await fetch("./main/data/profile.json")
  .then((r) => {
    return r.json();
  })
  .catch((err) => {
    console.log(err);
  });

export function profile() {
  const img = document.querySelector(".profileImg");
  const intro = document.querySelector(".profileIntro");
  const text = document.querySelector(".profileText");
  img.innerHTML = `<img src=${response.head.img}></img>`;
  intro.innerHTML = response.head.intro;
  text.innerHTML = response.head.text;
  const info = document.querySelector(".infoHead");
  const infoContent = document.querySelector(".infoContent");
  info.innerHTML = `<h2>${response.content.info.name}</h2>`;
  info.innerHTML += response.content.info.birth;
  infoContent.innerHTML =
    response.content.info.tel +
    response.content.info.email +
    response.content.info.address;
  const history = document.querySelector(".profileHistory");
  for (const element of response.content.history) {
    history.innerHTML += element;
    history.innerHTML += "<br>";
  }
}
