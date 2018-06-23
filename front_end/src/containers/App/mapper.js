import { bindActionCreators } from 'redux';
import {
  fetchToDoData,
  fetchWorkingData,
  fetchDoneData,
} from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchToDoData,
    fetchWorkingData,
    fetchDoneData,
  }, dispatch);
}

function mapStateToProps({
  toDoNotes,
  toDoHasErrored,
  toDoIsLoading,
  workingNotes,
  workingHasErrored,
  workingIsLoading,
  doneNotes,
  doneHasErrored,
  doneIsLoading,
}) {
  return {
    toDoNotes,
    toDoHasErrored,
    toDoIsLoading,
    workingNotes,
    workingHasErrored,
    workingIsLoading,
    doneNotes,
    doneHasErrored,
    doneIsLoading,
  };
}

export { mapDispatchToProps, mapStateToProps };
