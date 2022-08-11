import { Notify } from 'notiflix';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import refs from './refs'
import createCollection from './createCollection';
import ServiceAPI from './apiService'
import { scroll } from './scroll'; 

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
}