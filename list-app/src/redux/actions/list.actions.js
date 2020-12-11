import { v4 as uuid } from 'uuid';

import { DELETE_LIST_ITEM, EDIT_LIST_ITEM, ADD_LIST_ITEM } from './types';

export const deleteListItem = (id) => (dispatch) => {
  dispatch({
    type: DELETE_LIST_ITEM,
    payload: { id },
  });
};

export const editListItem = (id, content) => (dispatch) => {
  dispatch({
    type: EDIT_LIST_ITEM,
    payload: { id, content },
  });
};

export const addListItem = (content) => (dispatch) => {
  if (content != '') {
    dispatch({
      type: ADD_LIST_ITEM,
      payload: {
        listItem: {
          id: uuid(),
          content,
        },
      },
    });
  }
};
