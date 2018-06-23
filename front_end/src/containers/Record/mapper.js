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

export default mapDispatchToProps;
