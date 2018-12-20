import { IMAGES } from '../constants';

const initialState = {
  page: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return { ...state, page: state.page + 1 };

    default:
      return state;
  }
};
