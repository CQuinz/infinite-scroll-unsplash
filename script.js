// Unsplash API
const apiKey = 'vAVFlouWTXnC8palIWu8TrGUP-2NgDGpMTKAxX8CW3g';
const count = 10;
const unsplashUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos(){
  try{
    const response = await fetch(unsplashUrl);
    const data = await response.json();
    console.log(data);
  }catch(error) {
    // Catch error here
  }
}

// On load
// getPhotos();