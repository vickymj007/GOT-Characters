const apiUrl = "https://thronesapi.com/api/v2/Characters"

const container =document.querySelector(".container")
const input = document.querySelector(".search-box")
const childNodes = container.childNodes

const displayAllBtn = document.querySelector(".all") 
const displayTargaryenBtn = document.querySelector(".targaryen")
const displayStarkBtn = document.querySelector(".stark")
const displayLanisterBtn = document.querySelector(".lanister")
const displayBaratheonBtn = document.querySelector(".baratheon")



//Function to Fetch Data
const fetchData =  async function(url){
    try{
        const data = await fetch(url)
        const response = await data.json()
        createCharacterCard(response)

//Function to Search Characters
        if(data.status == 200){

            input.addEventListener("input", (e)=>{
                let searchValue = e.target.value.toLowerCase().trim()
                childNodes.forEach((element)=>{
                    let characterName = element.childNodes[1].childNodes[1].innerText;
                    let characterTitle = element.childNodes[1].childNodes[3].innerText;
                    if(characterName.toLowerCase().includes(searchValue) || characterTitle.toLowerCase().includes(searchValue)){
                        element.style.display = "flex"
                    } else {
                        element.style.display = "none"
                    }
                })
            })
            displayAllBtn.addEventListener("click",()=>{
                childNodes.forEach(element => element.style.display= "flex")
            })
            displayTargaryenBtn.addEventListener("click", (e)=>{
                childNodes.forEach(element =>{
                    let characterFamily = element.childNodes[1].childNodes[5].attributes[0].value
                    if(characterFamily === "House Targaryen"){
                        element.style.display = "flex"
                    } else {
                        element.style.display = "none"
                    }
                })
            })
            displayStarkBtn.addEventListener("click", ()=>{
                childNodes.forEach(element =>{
                    let characterFamily = element.childNodes[1].childNodes[5].attributes[0].value
                    if(characterFamily === "House Stark"){
                        element.style.display = "flex"
                    } else {
                        element.style.display = "none"
                    }
                })
            })
            displayLanisterBtn.addEventListener("click", ()=>{
                childNodes.forEach(element =>{
                    let characterFamily = element.childNodes[1].childNodes[5].attributes[0].value
                    if(characterFamily === "House Lannister"){
                        element.style.display = "flex"
                    } else {
                        element.style.display = "none"
                    }
                })
            })
            displayBaratheonBtn.addEventListener("click", ()=>{
                childNodes.forEach(element =>{
                    let characterFamily = element.childNodes[1].childNodes[5].attributes[0].value
                    if(characterFamily === "House Baratheon"){
                        element.style.display = "flex"
                    } else {
                        element.style.display = "none"
                    }
                })
            })
        }
    } catch (err) {
        console.log(err.message)
    }
}

fetchData(apiUrl)


//Function to Create Character Cards
 function createCharacterCard (data){
    data.forEach(async element => {
        const card = document.createElement("div")
        card.className="card"

        const imageDiv = document.createElement("div")
        imageDiv.className = "image-div"
        imageDiv.innerHTML=`
        <a target="_blank" href="${element.imageUrl}"><img src="${element.imageUrl}"></a>`
        card.append(imageDiv)

        const charcterInfo = document.createElement("div")
        charcterInfo.className ="characterInfo"
        charcterInfo.innerHTML = `
        <h4>${element.fullName}</h4>
        <h5>(${element.title})</h5>
        <h5 name="${element.family}" class="house">Family: ${element.family}</h5>`
        card.append(charcterInfo)

        container.append(card)
    });
}

