import {
  DELETE_LIST_ITEM,
  EDIT_LIST_ITEM,
  ADD_LIST_ITEM,
} from '../actions/types';

const INITIAL_STATE = [];

const listReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_LIST_ITEM:
      return state.filter((listItem) => listItem.id !== payload.id);

    case EDIT_LIST_ITEM:
      return state.map((listItem) => {
        if (listItem.id === payload.id) {
          return {
            ...listItem,
            content: payload.content,
          };
        }

        return listItem;
      });

    case ADD_LIST_ITEM:
      return [...state, payload.listItem];

    default:
      return state;
  }
};

export default listReducer;
