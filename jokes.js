const api_body = document.querySelector(".api_body");
const apiUrl = "https://icanhazdadjoke.com/";

async function fetchData() {
    const res = await fetch(apiUrl, {
        headers:{
            Accept: "application/json",
        }
    });

    const data = await res.json();
    console.log(data.joke);
    api_body.innerHTML = data.joke;
}

fetchData();

document.getElementById("fetch_joke").addEventListener("click", fetchData);
