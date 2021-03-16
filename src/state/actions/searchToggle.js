import { SEARCH_TOGGLE } from '../constants/searchToggle';

export function setShowSearch(searchToggle){
  return {
    type: SEARCH_TOGGLE,
    searchToggle
  }
}