import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebarReducer";
import { themeReducer } from "./themeReducer";

export default combineReducers({
  theme: themeReducer,
  sidebar: sidebarReducer,
});
