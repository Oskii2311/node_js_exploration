import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addToDo } from '../../services/api';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateKey = e.target.name;
    this.setState({ [stateKey]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    await addToDo(this.state.title, this.state.body);
    this.setState({
      title: '',
      body: '',
    });
    this.props.fetchToDoData();
  }

  render() {
    return (
      <form
        type="submit"
        onSubmit={this.handleSubmit}
        className="form_container"
      >
        <input
          type="text"
          name="title"
          placeholder="Type title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <input
          type="text"
          name="description"
          placeholder="Type description"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <input
          type="submit"
          value="Submit"
          disabled={this.state.title === ''}
        />
      </form>
    );
  }
}

Form.defaultProps = {
  fetchToDoData: {},
};

Form.propTypes = {
  fetchToDoData: PropTypes.func,
};

export default Form;
