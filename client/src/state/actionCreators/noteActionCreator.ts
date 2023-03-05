import axios from "axios";
import type { Dispatch } from "redux";
import type { Action } from "../../utils/Interfaces";
import type { Note, CreateNote } from "../../utils/types";
import { NoteActionTypes } from "../actionTypes/noteActionTypes";
import { config } from "../../config/config";

const noteRoute = "api/note";
export const getAllNotes = () => {
  return (dispatch: Dispatch<Action<Note>>) => {
    dispatch({
      type: NoteActionTypes.NOTE_REQUEST,
    });
    axios
      .get(`${config.base_url}${noteRoute}`)
      .then((response) => {
        const results = response.data;
        dispatch({
          type: NoteActionTypes.NOTE_SUCCESS,
          payload: results.data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: NoteActionTypes.NOTE_FAILURE,
          payload: errorMsg,
        });
      });
  };
};

export const getoneNoteByIDReset = () => {
  return (dispatch: Dispatch<Action<Note>>) => {
    dispatch({
      type: NoteActionTypes.NOTE_GET_ONE_RESET,
    });
  };
};

export const getoneNoteByID = (id: any) => {
  return (dispatch: Dispatch<Action<Note>>) => {
    dispatch({
      type: NoteActionTypes.NOTE_GET_ONE_REQUEST,
    });
    axios
      .get(`${config.base_url}${noteRoute}/${id}`)
      .then((response) => {
        const results = response.data;
        dispatch({
          type: NoteActionTypes.NOTE_GET_ONE_SUCCESS,
          payload: results.data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: NoteActionTypes.NOTE_GET_ONE_FAILURE,
          payload: errorMsg,
        });
      });
  };
};

export const addNotesReset = () => {
  return (dispatch: Dispatch<Action<Note>>) => {
    dispatch({
      type: NoteActionTypes.NOTE_ADD_RESET,
    });
  };
};

export const addNotes = (input: CreateNote) => {
  return (dispatch: Dispatch<Action<Note>>) => {
    dispatch({
      type: NoteActionTypes.NOTE_ADD_REQUEST,
    });
    axios
      .post(`${config.base_url}${noteRoute}`, input)
      .then((response) => {
        const results = response.data;
        dispatch({
          type: NoteActionTypes.NOTE_ADD_SUCCESS,
          payload: results.data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: NoteActionTypes.NOTE_ADD_FAILURE,
          payload: errorMsg,
        });
      });
  };
};

export const editNotesReset = () => {
  return (dispatch: Dispatch<Action<Note>>) => {
    dispatch({
      type: NoteActionTypes.NOTE_EDIT_RESET,
    });
  };
};

export const editNote = (id: any, input: CreateNote) => {
  return (dispatch: Dispatch<Action<Note>>) => {
    dispatch({
      type: NoteActionTypes.NOTE_EDIT_REQUEST,
    });
    const options = {
      method: "PUT",
      url: `${config.base_url}${noteRoute}/${id}`,
      data: input,
    };
    axios
      .request(options)
      .then((response) => {
        const results = response.data;
        dispatch({
          type: NoteActionTypes.NOTE_EDIT_SUCCESS,
          payload: results.data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: NoteActionTypes.NOTE_EDIT_FAILURE,
          payload: errorMsg,
        });
      });
  };
};

export const deleteNote = (id: any) => {
  return (dispatch: Dispatch<Action<Note>>) => {
    dispatch({
      type: NoteActionTypes.NOTE_EDIT_REQUEST,
    });
    const options = {
      method: "DELETE",
      url: `${config.base_url}${noteRoute}/${id}`,
    };
    axios
      .request(options)
      .then((response) => {
        const results = response.data;
        dispatch({
          type: NoteActionTypes.NOTE_EDIT_SUCCESS,
          payload: results.data,
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch({
          type: NoteActionTypes.NOTE_EDIT_FAILURE,
          payload: errorMsg,
        });
      });
  };
};
