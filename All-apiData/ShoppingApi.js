const SearchData = async _ => {
    try
    {
        const inputData = document.getElementById("input-data");
        if (inputData.value === "")
        {
            alert("please fill the input form")
        } else
        {
            const fetchData = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData.value}`)).json();
            getData(fetchData.meals);
            inputData.value = "";
        }
        
       
        
    } catch (error)
    {
        console.log(error);
    }
};

const getData = (data) => {
    const disPlaydData = document.getElementById("disPlayd-data");
    disPlaydData.textContent = "";
    data.map(crrElm => {
        const { idMeal, strMeal, strInstructions, strMealThumb, } = crrElm;
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div class="card">
            <img onClick="SingleData(${idMeal})" src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title fw-bold">${strMeal}</h5>
            <p class="card-text">${strInstructions.slice(0, 200)}</p>
            </div>
           </div>
        `;
        disPlaydData.appendChild(div);
    })
};

const SingleData = async id => {
    try
    {
        const fetchIdData = await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json();
        showSingData(fetchIdData.meals);
        
    } catch (error)
    {
        console.log(error);
    }
};

const showSingData = singleData => {
    const showSingleData = document.getElementById("single-data");
    showSingleData.textContent = "";
    singleData.map((crrElm) => {
        const { strMeal, strInstructions, strMealThumb, strYoutube } = crrElm;
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="w-50 mx-auto">
                <img src="${strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">${strMeal}</h5>
                <p class="card-text">${strInstructions.slice(0,250)}</p>
                <a href="${strYoutube}" target="_blank" class="btn btn-primary">Go YouTube</a>
            </div>
        </div>
        `;
        showSingleData.appendChild(div);
    })
}