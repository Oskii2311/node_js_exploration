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

export function toDoHasErrored(state = false, action) {
  switch (action.type) {
    case TODO_HAS_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
}

export function toDoIsLoading(state = false, action) {
  switch (action.type) {
    case TODO_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function toDoNotes(state = [], action) {
  switch (action.type) {
    case TODO_FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export function workingHasErrored(state = false, action) {
  switch (action.type) {
    case WORKING_HAS_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
}

export function workingIsLoading(state = false, action) {
  switch (action.type) {
    case WORKING_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function workingNotes(state = [], action) {
  switch (action.type) {
    case WORKING_FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export function doneHasErrored(state = false, action) {
  switch (action.type) {
    case DONE_HAS_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
}

export function doneIsLoading(state = false, action) {
  switch (action.type) {
    case DONE_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function doneNotes(state = [], action) {
  switch (action.type) {
    case DONE_FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
