document.getElementById("getData").addEventListener("click", _ => {
    location.reload();
});
const getShowData = document.getElementById("showData");
const getRandomData = async () => {
    try
    {
        const getApi = await (await fetch("https://randomuser.me/api/")).json();
        for (const ApiData of getApi.results)
        {
            ShowData(ApiData);
            return ApiData;
        }
        
    } catch (error)
    {
        console.log(error)
    }
};

getRandomData();

const ShowData = (apiRandom) => {

    const { gender, email, name: { title, first, last }, dob: { date, age }, location: { city, country }, phone, picture: { large }, login: { password } } = apiRandom;

    getShowData.innerHTML = `
            <img class="w-50 rounded-circle" src="${large}" alt="Card image cap">
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
            <p class="card-text m-0">Hi! my name is</p>
            <h4 class="fw-bold card-text">${title+" "+first+" "+last}</h4>
    `;
    
    
};

// const user = () => console.log("jamalpur");
// // const email = () => console.log("jamalpur");
// // const calender = () => console.log("jamalpur");
// // const map = () => console.log("jamalpur");
// // const phone = () => console.log("jamalpur");
// // const lock = () => console.log("jamalpur");

// ;

