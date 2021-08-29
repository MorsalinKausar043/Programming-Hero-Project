document.getElementById("getData").addEventListener("click", async () => {
    try
    {
        const inputData = document.getElementById("inputData");
        if (inputData.value == "")
        {
            alert("Please fiil the inputBox");
        }
        else
        {
            const ApiData = await (await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBCQ8MvrsGpH1wpobY_Ln1WFajI48u57mE&cx=3825959f4fad4e2a9&q=${inputData.value}`)).json();
            getGoogleApi(ApiData.items);
            inputData.value = "";
        }
    } catch (error)
    {
        console.log(error);
    }
});

const getGoogleApi = (apiDataGet) => {
    const showData = document.getElementById("show_results");
    showData.textContent = "";
    console.log(apiDataGet)
    apiDataGet.map((crrElm) => {
        const { htmlTitle, link, htmlFormattedUrl, pagemap: { cse_image }, snippet } = crrElm;
        const div = document.createElement("div");
        div.classList.add("container");
        div.innerHTML = `
            <div class="row my-3">
                <div class="col-10 col-md-12 mx-auto mt-3 d-flex flex-column">
                        <a href="${link}" class="text-primary m-0 h3 text-decoration-none">${htmlTitle}</a>
                        <p style="font-size: 12px;" href="${htmlFormattedUrl}" class="text-decoration-none text-success">${htmlFormattedUrl}</p>
                    <div class="row">
                        <div class="col-4 p-0">
                            <img src="${cse_image[0].src}" class="img-fluid images" alt="" srcset="">
                        </div>
                        <div class="col-8 d-flex flex-column">
                            <p class="" style="font-size: 13px;">${snippet}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        showData.appendChild(div);
    });
    
};