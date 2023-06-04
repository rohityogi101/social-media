import { REQUEST, SUCCESS, FAILURE } from "./rootreducer";

const initialState = {
  posts: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
