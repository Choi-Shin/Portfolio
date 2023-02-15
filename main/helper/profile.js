export async function getProfile() {
  const response = await fetch("http://localhost:3000/main/profile", {
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
