import type { State, Action } from "../../utils/Interfaces";
import type { Note } from "../../utils/types";
import { NoteActionTypes } from "../actionTypes/noteActionTypes";

const initialState: State<{ note: Note | null }> = {
  data: {
    note: null,
  },
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: "",
};

const noteEditReducer = (state = initialState, action: Action<any>): any => {
  switch (action.type) {
    case NoteActionTypes.NOTE_EDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        error: "",
      };
    case NoteActionTypes.NOTE_EDIT_RESET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        error: "",
      };
    case NoteActionTypes.NOTE_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        error: "",
      };
    case NoteActionTypes.NOTE_EDIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default noteEditReducer;
