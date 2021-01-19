import { error } from "console";
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from "../store/constants";

interface State {
  data: [];
  isFetching: boolean;
  error: boolean;
}

const initialState: State = {
  data: [],
  isFetching: false,
  error:false
};

export default function dataReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
