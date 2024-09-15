import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const my_api = '45998239-83277c8f1384b713dfba7e075';
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const images = document.querySelector('.images');
const loadingMessage = document.querySelector('.loading-message');

searchBtn.addEventListener('click', async e => {
  e.preventDefault();
  searchInput.value = searchInput.value.trim();
  images.innerHTML = '';
  loadingMessage.style.display = 'block';

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${my_api}&q=${searchInput.value}&image_type=photo`
    );

    if (!response.ok) {
        iziToast.error({
          title: 'Error',
          message: `An error occurred: ${response.statusText}`,
          position: 'topRight',
          backgroundColor: 'red'
        });
        return;
    }

    const data = await response.json();

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      const markup = data.hits
        .map(image => {
          return `
        <li class="image">
            <a class="image-link" href="${image.largeImageURL}"><img class="img" src="${image.webformatURL}" alt="${image.tags}"></a>
            <div class="image-info">
              <p class="image-desc">
               <span class="desc title">Likes</span> 
               <span class="desc value">${image.likes}</span> 
              </p>
              <p class="image-desc">
               <span class="desc title">Views</span> 
               <span class="desc value">${image.views}</span> 
              </p>
              <p class="image-desc">
               <span class="desc title">Comments</span> 
               <span class="desc value">${image.comments}</span>
              </p>
              <p class="image-desc">
               <span class="desc title">Downloads</span> 
               <span class="desc value">${image.downloads}</span>
              </p>
            </div>
        </li>
        `;
        })
        .join('');

      images.insertAdjacentHTML('beforeend', markup);

      const lightbox = new SimpleLightbox('.image a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
        backgroundColor: 'red'
      });

      lightbox.refresh();
    }

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `An error occurred: ${error.message}`,
      position: 'topRight',
      backgroundColor: 'red'
    });
  } finally {
    loadingMessage.style.display = 'none';
  }
});
