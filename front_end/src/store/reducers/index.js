import { combineReducers } from 'redux';
import {
  toDoNotes,
  toDoIsLoading,
  toDoHasErrored,
  workingNotes,
  workingIsLoading,
  workingHasErrored,
  doneNotes,
  doneIsLoading,
  doneHasErrored,
} from './reducer_note';

const rootReducer = combineReducers({
  toDoNotes,
  toDoIsLoading,
  toDoHasErrored,
  workingNotes,
  workingIsLoading,
  workingHasErrored,
  doneNotes,
  doneIsLoading,
  doneHasErrored,
});

export default rootReducer;
