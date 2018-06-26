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
  toDoIsLoading,
  workingNotes,
  workingIsLoading,
  doneNotes,
  doneIsLoading,
}) {
  return {
    toDoNotes,
    toDoIsLoading,
    workingNotes,
    workingIsLoading,
    doneNotes,
    doneIsLoading,
  };
}

export { mapDispatchToProps, mapStateToProps };
