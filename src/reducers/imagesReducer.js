import { IMAGES } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return [...state, ...action.images];

    default:
      return state;
  }
};
