document.getElementById("SearchData").addEventListener("click", async () => {
    try
    {
        const inputData = document.getElementById("inputBox");
        if (inputData.value == "")
        {
            alert("please fill the search Box!")
        } else
        {
            const fetchData = await (await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputData.value}`)).json();
            getTeamData(fetchData.teams)
            inputData.value = "";
        };
    } catch (error)

    {
        console.log(error)
    }
});

const getTeamData = (teamsData) => {
    teamsData.map((crrElm) => {
        const {idTeam, strTeam, strCountry, strDescriptionEN, strFacebook, strLeague, strTeamBadge, strWebsite, strYoutube } = crrElm;
        const showMultiData = document.getElementById("showMultiData");
        showMultiData.textContent = "";
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div class="card h-100">
                    <img onClick="getImages(${idTeam})" src="${strTeamBadge}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${strTeam}</h5>
                    <p>${strLeague}</p>
                    <p>${strCountry}</p>
                    <p class="card-text">${strDescriptionEN.slice(0, 200)}</p>
                    <a href="${strFacebook}" target="_blank">Facebook</a>
                    <a href="${strWebsite}" target="_blank">Website</a>
                    <a href="${strYoutube}" target="_blank">YouTube</a>
                </div>
            </div>
        `;
        showMultiData.appendChild(div);
    })
};

const getImages = async (id) => {
    try
    {
        const fetchDatas = await (await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)).json();
        showImgas(fetchDatas.teams)
        
    } catch (error)
    {
        console.log(error)
    }
};

const showImgas = (teamsDatas) => {
    teamsDatas.map((crrElm) => {
        const showImg = document.getElementById("showImg");
        showImg.textContent = "";
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${crrElm.strTeamBadge}" class="img-fluid"/>
        `;
        showImg.appendChild(div);
    })
}