import React from 'react';
import PropTypes from 'prop-types';
import './RecordButton.css';

const RecordButton = ({ onClick, text }) => (
  <button className="record_button" onClick={onClick}>{text}</button>
);

RecordButton.defaultProps = {
  onClick: {},
  text: '',
};

RecordButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default RecordButton;
