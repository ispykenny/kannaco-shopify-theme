import { setBackgroundImages } from "./backgrounds";
import { getImageRatio , initDomImages } from "./images";
const all_images = document.querySelectorAll('img');
const article = document.querySelector('.article');

if(article) {
  console.log('didnt init lazy load')
}else {
  getImageRatio(all_images);
}
if(all_images.length) {
  
  window.onload = () => {
    let allImages = document.querySelectorAll('img');
    if(article) {
      allImages.forEach((img) =>  {
        img.style.opacity = 1
        img.style.width = 'auto'
        img.style.maxWidth = '100%'
      })
    } else {
      initDomImages(allImages)
    }

    setBackgroundImages();
  };
}
