const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArray = [];

// Create Elements for links and photos, add to the DOM
const displayPhotos = ()=>{
  // Run function foreach object in photoArray
  photoArray.forEach((photo) =>{
    
  });
}

// Unsplash API
const apiKey = 'vAVFlouWTXnC8palIWu8TrGUP-2NgDGpMTKAxX8CW3g';
const count = 10;
const unsplashUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos(){
  try{
    const response = await fetch(unsplashUrl);
    photoArray = await response.json();
    displayPhotos();
  }catch(error) {
    // Catch error here
  }
}

// On load
// getPhotos();