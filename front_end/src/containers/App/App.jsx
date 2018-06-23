import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './mapper';
import List from '../../components/List/List';
import Form from '../Form/Form';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchToDoData();
    this.props.fetchWorkingData();
    this.props.fetchDoneData();
  }

  render() {
    return (
      <div className="App">
        <Form fetchToDoData={this.props.fetchToDoData} />
        <div className="list_container">
          <List
            header="TO DO"
            Notes={this.props.toDoNotes}
            Loading={this.props.toDoIsLoading}
          />
          <List
            header="WORKING"
            Notes={this.props.workingNotes}
            Loading={this.props.workingIsLoading}
          />
          <List
            header="DONE"
            Notes={this.props.doneNotes}
            Loading={this.props.doneIsLoading}
          />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  fetchToDoData: {},
  fetchWorkingData: {},
  fetchDoneData: {},
  toDoNotes: [],
  doneNotes: [],
  workingNotes: [],
  doneIsLoading: false,
  workingIsLoading: false,
  toDoIsLoading: false,
};

App.propTypes = {
  fetchToDoData: PropTypes.func,
  fetchWorkingData: PropTypes.func,
  fetchDoneData: PropTypes.func,
  toDoNotes: PropTypes.arrayOf(PropTypes.object),
  doneNotes: PropTypes.arrayOf(PropTypes.object),
  workingNotes: PropTypes.arrayOf(PropTypes.object),
  doneIsLoading: PropTypes.bool,
  workingIsLoading: PropTypes.bool,
  toDoIsLoading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
