const user = document.getElementById("user");
const email = document.getElementById("email");
const calender = document.getElementById("calender");
const map = document.getElementById("map");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const introTitle = document.getElementById("intro-title");
const introName = document.getElementById("intro-name");
const images = document.getElementById("images");
let store = [];


document.getElementById("getData").addEventListener("click", _ => {
    location.reload();
});

const getRandomData = async () => {
    try
    {
        const getApiData = await (await fetch(`https://randomuser.me/api`)).json();
        const getApi = getApiData.results[0];
        store.push(getApi);
        // console.log(getApi)
        
    } catch (error)
    {
        console.log(error)
    }
};

getRandomData();

console.log(store);
