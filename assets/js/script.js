document.addEventListener('DOMContentLoaded',()=>{
    getOurAnimals()
})

const animalPic = "http://localhost:3000/characters"

function getOurAnimals(){
    fetch (animalPic)
    .then(res=>res.json())
    .then(data => data.forEach((newAnimals) => {
        console.log(newAnimals.name)
    }))
}