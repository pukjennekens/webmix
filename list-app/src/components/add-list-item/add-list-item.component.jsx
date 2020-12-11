import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { addListItem } from '../../redux/actions/list.actions';

const AddListItem = ({ addListItem }) => {
  const [newItemContent, setNewItemContent] = useState('');
  const newItemContentField = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    addListItem(newItemContent);
    setNewItemContent('');
  };

  return (
    <div className='py-2 px-3 shadow-sm rounded mb-3'>
      <form className='d-flex' onSubmit={handleSubmit}>
        <input
          type='text'
          value={newItemContent}
          onChange={(e) => setNewItemContent(e.target.value)}
          className='form-control flex-grow-1'
          ref={newItemContentField}
        />

        <button
          type='submit'
          className='btn btn-success ml-2'
          onClick={() => newItemContentField.current.focus()}
        >
          <i className='fas fa-plus'></i>
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addListItem: (content) => dispatch(addListItem(content)),
});

export default connect(null, mapDispatchToProps)(AddListItem);
