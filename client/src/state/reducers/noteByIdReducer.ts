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

const noteByIdReducer = (state = initialState, action: Action<any>): any => {
  switch (action.type) {
    case NoteActionTypes.NOTE_GET_ONE_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: { note: null },
        isError: false,
        isSuccess: false,
        error: "",
      };
    case NoteActionTypes.NOTE_GET_ONE_RESET:
      return {
        ...state,
        isLoading: false,
        data: { note: null },
        isError: false,
        isSuccess: false,
        error: "",
      };
    case NoteActionTypes.NOTE_GET_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: { note: action.payload },
        error: "",
      };
    case NoteActionTypes.NOTE_GET_ONE_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: { note: null },
        isError: false,
        isSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default noteByIdReducer;
