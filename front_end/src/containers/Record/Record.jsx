import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateNote } from '../../services/api';
import mapDispatchToProps from './mapper';
import './Record.css';
import RecordButton from '../../components/RecordButton/RecordButton';

class Record extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.show = this.show.bind(this);
  }

  refresh() {
    this.props.fetchToDoData();
    this.props.fetchWorkingData();
    this.props.fetchDoneData();
  }

  async update(e) {
    await updateNote(
      this.props.note.title,
      this.props.note.body,
      e.target.innerText === 'WORKING' ? 'true' : 'done',
      this.props.note._id,
    );
    this.refresh();
  }

  wchichButton() {
    if (this.props.header === 'TO DO') {
      return <RecordButton onClick={this.update} text="WORKING" />;
    } else if (this.props.header === 'WORKING') {
      return <RecordButton onClick={this.update} text="DONE" />;
    }
    return true;
  }

  show() {
    const elClass = document
      .getElementById(this.props.note._id).classList;
    if (elClass.value === 'hide') {
      elClass.remove('hide');
      elClass.add('show');
    } else {
      elClass.remove('show');
      elClass.add('hide');
    }
  }

  render() {
    return (
      <div>
        <div
          tabIndex="0"
          onKeyDown={() => {}}
          role="button"
          className="record"
          onClick={this.show}
        >
          {this.props.note.title}
          {this.wchichButton()}
        </div>
        <div id={this.props.note._id} className="hide">
          {
            this.props.note.text ? this.props.note.text : 'empty'
          }
        </div>
      </div>
    );
  }
}

Record.defaultProps = {
  fetchToDoData: {},
  fetchWorkingData: {},
  fetchDoneData: {},
  header: '',
  note: {},
};

Record.propTypes = {
  fetchToDoData: PropTypes.func,
  fetchWorkingData: PropTypes.func,
  fetchDoneData: PropTypes.func,
  header: PropTypes.string,
  note: PropTypes.instanceOf(Object),
};

export default connect(null, mapDispatchToProps)(Record);
