const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArray = [];

// Helper function to setAttributes on DOM elements
const setAttributes = (element, attributes)=>{
  for(const key in attributes){
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for links and photos, add to the DOM
const displayPhotos = ()=>{
  // Run function foreach object in photoArray
  photoArray.forEach((photo) =>{
    // Create A tag to link to Unsplash url
    const item = document.createElement("a");
    
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    // Create img tag for photo
    const img = document.createElement("img");
    
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //Put img inside of a tag, then put a tag inside of img container
    item.appendChild(img);
    imageContainer.appendChild(item);

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
    console.log(error);
  }
}

// Check to see if scrolling near bottom of the page. Load more photos
window.addEventListener('scroll', ()=>{
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
    console.log('window.innerHeight: '+ window.innerHeight);
    console.log('window.scrollY: '+ window.scrollY);
    console.log('window.innerHeight + window.scrollY: '+ window.innerHeight + window.scrollY);
    console.log('document.body.offsetHeight: '+ document.body.offsetHeight);

  }
});

// On load
// getPhotos();