document.addEventListener('DOMContentLoaded',()=>{
    getOurAnimals()
})

const animalPic = "https://newtonombese.github.io/animal-kingdom-api/animals.json"

function getOurAnimals(){
    fetch (animalPic)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.characters)
        let ourCharacters = data.characters
        ourCharacters.forEach(animal=>{
            ourAnimalNames(animal)
        })
    })
}

function ourAnimalNames(anime){
    let spanified = document.createElement('span')
    spanified.innerHTML = anime.name;
    let p = document.createElement('p').appendChild(spanified)
    p.setAttribute('id', 'anime-name')
    document.getElementById('animals').appendChild(p)

    p.addEventListener('click', () =>{
        const animalName = document.getElementById('animalName')
        const animalImage = document.getElementById('animalImage')
        animalName.innerHTML = anime.name
        animalImage.setAttribute('src', `${anime.image}`)
    })
}

