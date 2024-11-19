import { CHANGE_LANGUANGE } from "./action";

const initialState = {
  lang: "en",
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUANGE:
          return {
              ...state,
              lang: action.payload
          };
    default:
      return state;
  }
};

export default langReducer;
