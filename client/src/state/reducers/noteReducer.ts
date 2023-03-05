import type { State, Action } from "../../utils/Interfaces";
import type { Note } from "../../utils/types";
import { NoteActionTypes } from "../actionTypes/noteActionTypes";

const initialState: State<{ notes: Note[] }> = {
  data: {
    notes: [],
  },
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: "",
};

const noteReducer = (state = initialState, action: Action<any>): any => {
  switch (action.type) {
    case NoteActionTypes.NOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: { notes: [] },
        isError: false,
        error: "",
      };
    case NoteActionTypes.NOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: { notes: action.payload },
        error: "",
      };
    case NoteActionTypes.NOTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: { notes: [] },
        isError: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default noteReducer;
