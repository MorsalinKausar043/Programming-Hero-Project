document.getElementById("Search").addEventListener("change", async (e)=> {
    const inputData = e.target.value;
    const image = document.getElementById("img");
    const imgLink = `https://source.unsplash.com//600x400/?${inputData}`;
    image.setAttribute("src", imgLink);
});