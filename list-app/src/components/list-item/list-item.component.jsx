import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { deleteListItem, editListItem } from '../../redux/actions/list.actions';

import ListItemDeleteButton from '../list-item-delete-button/list-item-delete-button.component';

const ListItem = ({ listItemId, content, deleteListItem, editListItem }) => {
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const editFieldRef = useRef();

  useEffect(() => {
    editMode && editFieldRef.current.focus();
  });

  const submitEdit = () => {
    editListItem(listItemId, newContent);
    setEditMode(false);
  };

  const handleEditFieldKeyDown = (e) => {
    e.key === 'Enter' && submitEdit();
  };

  return (
    <div className='py-2 px-3 shadow-sm rounded mb-3'>
      <div className='d-flex'>
        <div className='flex-grow-1'>
          {editMode ? (
            <input
              type='text'
              className='form-control'
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              ref={editFieldRef}
              onKeyDown={handleEditFieldKeyDown}
            />
          ) : (
            <h4>{content}</h4>
          )}
        </div>

        {editMode ? (
          <button className='btn btn-success ml-2' onClick={submitEdit}>
            <i className='fas fa-pen'></i>
          </button>
        ) : (
          <div>
            <button
              className='btn btn-warning mx-2'
              onClick={() => setEditMode(true)}
            >
              <i className='fas fa-pen'></i>
            </button>

            <ListItemDeleteButton onClick={() => deleteListItem(listItemId)} />
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteListItem: (id) => dispatch(deleteListItem(id)),
  editListItem: (id, content) => dispatch(editListItem(id, content)),
});

export default connect(null, mapDispatchToProps)(ListItem);
