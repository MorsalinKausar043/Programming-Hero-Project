const main_div = document.getElementById("main_div");
const commentApi = async () => {
    try
    {
        const fetchData = await fetch("https://jsonplaceholder.typicode.com/comments");
        const jsonParseData = await fetchData.json();
        jsonParseData.map(crrElm => GetData(crrElm));
    }
    catch (error)
    {
        console.log(error)
    }
};

const GetData = (CommentData) => {
    const { body, email, id, name, postId } = CommentData;
    // console.log(name)
    const p = document.createElement("p");
    p.innerHTML = `
        // 1) ${body} 
        //2) ${email} 
        //3) ${id} 
        //4) ${name} 
        //5) ${postId}
    `;
    main_div.appendChild(p);
}

commentApi();