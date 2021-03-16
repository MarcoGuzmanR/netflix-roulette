import { SEARCH_TOGGLE } from '../constants/searchToggle';

const initialState = {
  showSearch: true
}

function searchToggleReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TOGGLE:
      return {
        ...state,
        showSearch: action.searchToggle
      }
    default:
      return state;
  }
}

export default searchToggleReducer;