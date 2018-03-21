import { createStore, combineReducers } from "redux";
import opportunityReducer from '../reducers/opportunityReducer'

export default () =>{
   const store =  createStore(
       combineReducers({
        opportunities: opportunityReducer
        })
    );
    return store;
}