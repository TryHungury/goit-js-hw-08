// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';

const galleryRef = document.querySelector('.gallery')


const makeItemMarkup = (galleryItems) => {
    const imgMarkup = galleryItems.map(({preview, original, description})=>{
      return `
      <a class = gallery__item href = "${original}">
      <img src="${preview}" alt="${description}" data-source="${original}" class = gallery__image>
      </img></a>` 
    })
    // console.log("🚀liMarkup", imgMarkup)
    
    return imgMarkup;
}

galleryRef.insertAdjacentHTML('afterbegin', makeItemMarkup(galleryItems).join(''))

const clickOnImg = (e) => {
    e.preventDefault();
    
    if(e.target.nodeName !== 'IMG') {
        return;
    }
}

galleryRef.addEventListener('click', clickOnImg);
new SimpleLightbox('.gallery a', {animationSpeed: 400, captionsData: 'alt',captionDelay: 250});

// console.log(galleryItems);

