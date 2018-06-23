import React from 'react';
import PropTypes from 'prop-types';
import Record from '../../containers/Record/Record';
import './List.css';

const List = ({ header, Loading, Notes }) => (
  <div>
    <div className="header">
      <h1>{header}</h1>
    </div>
    <div className="container_todo">
      {
        Loading ?
        'Loading...' :
        Notes.map(note => (
          <Record key={note._id} note={note} header={header} />))
      }
    </div>
  </div>
);

List.defaultProps = {
  header: '',
  Loading: false,
  Notes: [],
};

List.propTypes = {
  header: PropTypes.string,
  Loading: PropTypes.bool,
  Notes: PropTypes.arrayOf(PropTypes.object),
};

export default List;
