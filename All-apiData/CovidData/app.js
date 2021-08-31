
const inputData = document.getElementById("inputData");
document.getElementById("searchBtn").addEventListener("click", async () => {
    try
    {
        const inputVal = inputData.value;
        if (inputVal === "")
        {
            alert("plz Fill the input Box")
        } else
        {
            const getMainInputval = inputVal[0].toUpperCase() + inputVal.slice(1).toLowerCase();
            const fetchData = await (await fetch("https://api.covid19api.com/summary")).json();
            // console.log(fetchData)
            const getCountryData = fetchData.Countries.filter((crrElm) => crrElm.Country === getMainInputval);
            if (getMainInputval === "Global")
            {
                console.log(fetchData.Global)
            } else
            {
                console.log(getCountryData[0]);
            }
        }
        
        
    } catch (error)
    {
        console.log(error);
    }
});
