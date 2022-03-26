document.addEventListener("DOMContentLoaded", start);

function start(){
    const clickMe = document.querySelector(".button");
    displayPhoto();
    clickMe.addEventListener("click", displayPhoto);

}

async function displayPhoto(){
    const firstURL = `https://api.thecatapi.com/v1/images/search`
    const getCatImage = await fetch(firstURL);
    const data = await getCatImage.json();
    // console.log(data.url);
    data.forEach(i => {
        const imageurl = i.url;
        // console.log(i.url)
        createimageHtml(imageurl)
    })
}

function createimageHtml(imageurl){

    let upload = document.querySelector("#images");
    upload.innerHTML = "";
    let imageElement = document.createElement("img");
    imageElement.src = imageurl;

    upload.appendChild(imageElement);

}