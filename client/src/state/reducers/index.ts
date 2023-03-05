import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import noteByIdReducer from "./noteByIdReducer";
import noteAddReducer from "./noteAddReducer";
import noteEditReducer from "./noteEditReducer";
import noteDeleteReducer from "./noteDeleteReducer";

const reducers = combineReducers({
  notes: noteReducer,
  notebyid: noteByIdReducer,
  noteAdd: noteAddReducer,
  noteEdit: noteEditReducer,
  noteDelete: noteDeleteReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
