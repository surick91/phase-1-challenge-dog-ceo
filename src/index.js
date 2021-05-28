console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    getDogImgs()
    getBreeds()



})

const getDogImgs = function(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((res) => res.json())
    .then((data) => data.message.forEach((dogImgUrl) => renderDogImg(dogImgUrl)))
}

const renderDogImg = function(dogImgUrl){
    console.log(dogImgUrl)
    const imgContainer = document.querySelector("#dog-image-container")
    const dogImg = document.createElement('img')
    dogImg.src = dogImgUrl
    imgContainer.append(dogImg)
    
}

//Challenge 2/3
const  getBreeds = function(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((data) => Object.keys(data.message).forEach((breedsUrl) => renderDogBreeds(breedsUrl)))
    }
    
const renderDogBreeds = function (breedsUrl){
    console.log(breedsUrl)
    const dogBreedContainer = document.querySelector('#dog-breeds')
    const breedList = document.createElement('li')
    breedList.addEventListener('click', () =>breedList.style.color = "red" )
    breedList.textContent = breedsUrl
    dogBreedContainer.append(breedList) 

}
function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }
  