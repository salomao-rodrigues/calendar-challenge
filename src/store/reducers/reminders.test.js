import reminders from './reminders';
import * as ActionTypes from '../../constants/actionTypes';

describe('reminders reducer', () => {
  it('should return the initial state', () => {
    expect(reminders(undefined, [])).toEqual([]);
  });

  it('should handle ADD_REMINDER', () => {
    const date = new Date(2018, 11, 4);
    const title = 'Run the tests';

    const action = {
      type: ActionTypes.ADD_REMINDER,
      title,
      date
    };

    const expectedState = [{ date, title }];

    expect(reminders(undefined, action)).toEqual(expectedState);
  });

  it('should keep the state sorted by date when handling ADD_REMINDER', () => {
    const previousState = [{
      date: new Date(2011, 11, 4),
      title: "Date 1"
    }, {
      date: new Date(2012, 11, 4),
      title: "Date 2"
    }, {
      date: new Date(2014, 11, 4),
      title: "Date 4"
    }];

    const action = {
      type: ActionTypes.ADD_REMINDER,
      date: new Date(2013, 11, 4),
      title: "Date 3"
    };

    const expectedState = [
      previousState[0],
      previousState[1],
        {
          date: action.date,
          title: action.title
        },
      previousState[2]
    ];

    expect(reminders(previousState, action)).toEqual(expectedState);
  });
});
