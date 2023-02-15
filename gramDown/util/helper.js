const form = document.querySelector("form");
const article = document.querySelector("article");

async function getLinkPost(url) {
  console.log(typeof url);
  const response = await fetch(`http://localhost:3000/crawler`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ link: url }),
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const link = event.target.link.value;
  const basic = "https://www.instagram.com/p/";
  if (link.startsWith(basic)) {
    getLinkPost(link);
  } else {
    const div = document.createElement("div");
    div.className = "error";
    div.innerHTML = "링크를 확인하고 다시 시도해주세요.";
    article.appendChild(div);
  }
});
