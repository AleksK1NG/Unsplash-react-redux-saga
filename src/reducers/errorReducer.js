import { IMAGES } from '../constants';

const initialState = {
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
      return { ...state, error: action.error };
    case IMAGES.LOAD:
      return state;
    case IMAGES.LOAD_SUCCESS:
      return { ...state, error: null };

    default:
      return state;
  }
};
