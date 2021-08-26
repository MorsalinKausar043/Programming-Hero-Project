// const CovidData = async () => {
    
//     const fetchData = await fetch("https://api.covid19api.com/summary");
//     const JsonParse = await fetchData.json();
//     const Countries = JsonParse.Countries;
//     for (const Data of Countries)
//     {
//         getData(Data)
//     }
// };

// const getData = (data) => {

//     const main_div = document.getElementById("main_div");
//     const p = document.createElement("p");
//     p.innerText = `County ::: ${data.Country}`;
//     main_div.appendChild(p);
// };

// CovidData();

const getCovidData = async () => {
    try
    {
        const fetchData = await fetch("https://api.covid19api.com/summary");
        const JsonParse = await fetchData.json();
        const countryData = await JsonParse.Countries.filter((val) => {
            const data = val.Country == "India";
            return data;
        });
        const { Country , NewConfirmed , NewDeaths , NewRecovered , TotalConfirmed , TotalDeaths, TotalRecovered} = countryData[0];
        // console.log(countryData[0])
        console.log(Country , NewConfirmed , NewDeaths , NewRecovered , TotalConfirmed , TotalDeaths,TotalRecovered)
        const main_div = document.getElementById("main_div");
        const h1 = document.createElement("h1");
        h1.innerHTML = `
        The country name is ${Country};
        The newConfirmed name is ${NewConfirmed};
        The NewDeaths name is ${NewDeaths};
        The NewRecovered name is ${NewRecovered};
        The TotalConfirmed name is ${TotalConfirmed};
        The TotalDeaths name is ${TotalDeaths};
        The TotalRecovered name is ${TotalRecovered};
        
        `;
        main_div.appendChild(h1);
        
    }
    catch (error)
    {
        console.log(error);
        
    }
};

getCovidData();