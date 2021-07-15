import { SET_USERS,remove_data,data2 } from "./action";
import * as redux from "redux" 

const initialState = {
    data: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS: {
        console.log("Data fetched :: " + action.value);
        return { ...state, data: action.value };
      }
      case remove_data:{
        return{data:[]};
      }
      case data2:{
        return{...state, data2:action.value}
      }
  
      default:
        return initialState;
    }
  };
  
  export const rootReducer = redux.combineReducers({
    users: userReducer,
  });