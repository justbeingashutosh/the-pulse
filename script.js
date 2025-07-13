const container = document.querySelector("#container")

function createCards(image, title, description){
    console.log(title)
    if(image==null){
        image = "some.pic"
        
    }
    let card = document.createElement("div")
    card.classList.add("card")

    let cardTitle = document.createElement("div")
    cardTitle.textContent = title.length > 100 ? title.slice(0,100)+"..." : title
    cardTitle.classList.add("card-title")
    
    let coverImg = document.createElement("img")
    coverImg.setAttribute("src", image)
    let coverImgContainer = document.createElement('div')
    coverImgContainer.classList.add("card-img-container")
    coverImgContainer.appendChild(coverImg)
    let cardDesc = document.createElement("div")
    cardDesc.classList.add("card-description")
    cardDesc.textContent = description == null ? "" : (description.length > 250 ? description.slice(0, 250)+"..." : description)
    card.appendChild(coverImgContainer)
    card.appendChild(cardTitle)
    card.appendChild(cardDesc)
    container.appendChild(card)

}


async function getResponse(){
try{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=bd3dfd3d62cd4039949f826d77e0ce2f`)
    const data = await response.json()
    console.log(data.articles)
       for(let article of data.articles){
        // console.log(article)
        createCards(article.urlToImage, article.title, article.description)
       }
}catch(e){
    console.error("Error Fetching News Updates", e)
    console.log("bsdk")
}}
getResponse()