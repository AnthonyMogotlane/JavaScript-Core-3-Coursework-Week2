// Reference
const body = document.querySelector("body");
// Create img element
const img = document.createElement("img");


fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(image => img.src = image.img)
    .catch(error => console.warn(error))

body.appendChild(img);