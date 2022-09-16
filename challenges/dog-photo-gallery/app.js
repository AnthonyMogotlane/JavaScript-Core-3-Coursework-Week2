// Reference 
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const ul = document.querySelector(".list");

// Create elements
const li = document.createElement("li");
const img = document.createElement("img");

// Function to fetch random images
const getRandomImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(image => img.src = image.message)
        .catch(error => console.warn(error))
    
    li.appendChild(img);
    ul.appendChild(li);
}

right.addEventListener("click", getRandomImg);

