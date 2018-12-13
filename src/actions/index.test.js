import * as actions from './';
import * as types from '../constants/actionTypes';

describe('actions', () => {
  it('should create an action to add a reminder', () => {
    const title = "knock someone's socks off";
    const date = new Date(1988, 5);
    const expectedAction = {
      type: types.ADD_REMINDER,
      title,
      date
    };
    expect(actions.addReminder(title, date)).toEqual(expectedAction);
  });
});
