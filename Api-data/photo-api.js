const main_div = document.getElementById("main_div");
const PhotoApi = async () => {
    try
    {
        const fetchData = await fetch("https://jsonplaceholder.typicode.com/photos");
        const jsonParse = await fetchData.json();
        jsonParse.map((crrElm) => getData(crrElm));
        
    } catch (error) {
        console.log(error);
    }
};

const getData = (currData) => {
    const { albumId, id, thumbnailUrl, title, url } = currData;
    const img = document.createElement("img");
    img.classList.add("images");
    img.setAttribute("src", url);
    main_div.appendChild(img)
}

PhotoApi();