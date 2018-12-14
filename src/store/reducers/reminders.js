import binarySearchInsert from 'binary-search-insert';

import * as ActionTypes from '../../constants/actionTypes';

const insertComparator = (a, b) => a.date.getTime() - b.date.getTime();

const reminders = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_REMINDER:
      const { date, title } = action;
      const newState = [...state];
      binarySearchInsert(newState, insertComparator, { date, title });

      return newState;
    default:
      return state;
  }
}

export default reminders;
