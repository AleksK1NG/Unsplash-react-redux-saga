import { IMAGES } from '../constants';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return { ...state, isLoading: true };
    case IMAGES.LOAD_SUCCESS:
      return { ...state, isLoading: false };
    case IMAGES.LOAD_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
