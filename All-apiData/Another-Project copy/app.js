
const covidData = async (inputValData) => {
    try
    {
        const fetchData = await (await fetch(`https://api.covid19api.com/summary`)).json();
        const countryData = fetchData.Countries.filter((crrElm) => {
            const data = crrElm.Country === inputValData;
            return data;
        });
        getApiData(countryData[0])
        
    } catch (error)
    {
        console.log(error);
    }
};

const getApiData = (handleApi) => {
    console.log(handleApi)
    const { Country, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = handleApi;
};

const inputData = document.getElementById("inputData").addEventListener("change", (e) => {
    const inputVal = e.target.value;
    // covidData(inputVal)
    console.log(inputVal)
});