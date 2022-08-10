import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import createCollection from './createCollection';
import apiService from './apiService'; 
import { scroll } from './scroll'; 

const refs = {
  searchForm: document.querySelector('#search-form'), 
  gallery: document.querySelector('.gallery'),
};

let query = ''
let page = 1
let simpleLightBox = new SimpleLightbox('.gallery a')
const perPage = 40

refs.searchForm.addEventListener('submit', onSearchForm)

function onSearchForm(event) {
  event.preventDefault()

  page = 1
  query = event.currentTarget.searchQuery.value.trim()
  refs.gallery.innerHTML = ''
  
  if (!query) {
    Notify.failure('The search string cannot be empty. Please specify your search query.')
    return
  }

  apiService(query, page, perPage)
    .then(({ data }) => {
      if (data.totalHits === 0) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      } else {
        createCollection(data.hits)
        simpleLightBox.refresh()
        Notify.success(`Hooray! We found ${data.totalHits} images.`)
      }
    })
    
    .catch(error => console.log(error))
  
}

// function onBtnLoad() {
//   page += 1
//   //simpleLightBox.destroy()

//   apiService(query, page, perPage)
//     .then(({ data }) => {
//       createCollection(data.hits)
//       //simpleLightBox = new SimpleLightbox('.gallery a')
//       simpleLightBox.refresh()

//       const totalPages = Math.floor(data.totalHits / perPage)
//       if (page > totalPages) {
//         refs.btnLoad.classList.add('is-hidden') 
//         Notify.failure("We're sorry, but you've reached the end of search results.")
//       }
//       scroll()
//     })
//     .catch(error => console.log(error))
// } 