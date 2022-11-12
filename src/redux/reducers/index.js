import { combineReducers } from "redux";
import { AudioReducers } from "./audioReducers";
import { CommonReducers } from "./commonReducers";

const rootReducer = combineReducers({
  audio: AudioReducers,
  common: CommonReducers,
});

export default rootReducer;


