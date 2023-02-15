export async function getCredit() {
  const response = await fetch("http://localhost:3000/snakegame/credit", {
    method: "GET",
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}
