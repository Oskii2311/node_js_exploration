import {
  TODO_HAS_ERROR,
  TODO_IS_LOADING,
  TODO_FETCH_DATA_SUCCESS,
  WORKING_HAS_ERROR,
  WORKING_IS_LOADING,
  WORKING_FETCH_DATA_SUCCESS,
  DONE_HAS_ERROR,
  DONE_IS_LOADING,
  DONE_FETCH_DATA_SUCCESS,
} from '../constants/action_type';
import { TODO_URL, WORKING_URL, DONE_URL } from '../../services/constants/urls';

export function toDoHasErrored(bool) {
  return {
    type: TODO_HAS_ERROR,
    hasErrored: bool,
  };
}

export function toDoIsLoading(bool) {
  return {
    type: TODO_IS_LOADING,
    isLoading: bool,
  };
}

export function toDoFetchDataSuccess(items) {
  return {
    type: TODO_FETCH_DATA_SUCCESS,
    payload: items,
  };
}

export function fetchToDoData() {
  return async (dispatch) => {
    dispatch(toDoIsLoading(true));
    const response = await fetch(TODO_URL);
    if (!response.ok) {
      dispatch(toDoHasErrored(true));
    }
    const json = await response.json();
    dispatch(toDoIsLoading(false));
    dispatch(toDoHasErrored(false));
    if (json.message === 'notes not found') {
      dispatch(toDoHasErrored(true));
    } else {
      dispatch(toDoFetchDataSuccess(json));
    }
  };
}

export function workingHasErrored(bool) {
  return {
    type: WORKING_HAS_ERROR,
    hasErrored: bool,
  };
}

export function workingIsLoading(bool) {
  return {
    type: WORKING_IS_LOADING,
    isLoading: bool,
  };
}

export function workingFetchDataSuccess(items) {
  return {
    type: WORKING_FETCH_DATA_SUCCESS,
    payload: items,
  };
}

export function fetchWorkingData() {
  return async (dispatch) => {
    dispatch(workingIsLoading(true));
    const response = await fetch(WORKING_URL);
    if (!response.ok) {
      dispatch(workingHasErrored(true));
    }
    const json = await response.json();
    dispatch(workingIsLoading(false));
    dispatch(workingHasErrored(false));
    if (json.message === 'notes not found') {
      dispatch(workingHasErrored(true));
    } else {
      dispatch(workingFetchDataSuccess(json));
    }
  };
}

export function doneHasErrored(bool) {
  return {
    type: DONE_HAS_ERROR,
    hasErrored: bool,
  };
}

export function doneIsLoading(bool) {
  return {
    type: DONE_IS_LOADING,
    isLoading: bool,
  };
}

export function doneFetchDataSuccess(items) {
  return {
    type: DONE_FETCH_DATA_SUCCESS,
    payload: items,
  };
}

export function fetchDoneData() {
  return async (dispatch) => {
    dispatch(doneIsLoading(true));
    const response = await fetch(DONE_URL);
    if (!response.ok) {
      dispatch(doneHasErrored(true));
    }
    const json = await response.json();
    dispatch(doneIsLoading(false));
    dispatch(doneHasErrored(false));
    if (json.message === 'notes not found') {
      dispatch(doneHasErrored(true));
    } else {
      dispatch(doneFetchDataSuccess(json));
    }
  };
}
