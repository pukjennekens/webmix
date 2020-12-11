import React, { useState, useRef, useEffect } from 'react';

const ListItemDeleteButton = ({ onClick }) => {
  const [confirmMode, setConfirmMode] = useState(false);
  const deleteButtonRef = useRef();

  const handleDeleteButtonClick = () => {
    setConfirmMode(!confirmMode);
    deleteButtonRef.current.blur();
  };

  return (
    <div className='btn-group'>
      <button
        type='button'
        className='btn btn-danger'
        onClick={handleDeleteButtonClick}
        ref={deleteButtonRef}
      >
        <i className='fas fa-times'></i>
      </button>

      {confirmMode && (
        <button className='btn btn-success' onClick={onClick}>
          <i className='fas fa-check'></i>
        </button>
      )}
    </div>
  );
};

export default ListItemDeleteButton;
