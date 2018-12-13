import React from 'react';
import MonthView from './';
import { shallow } from 'enzyme';

const testCases = [
  {
    date: new Date(2018, 11),
    offsetBefore: 6,
    offsetAfter: 5,
    rows: 6
  },
  {
    date: new Date(2012, 1),
    offsetBefore: 3,
    offsetAfter: 3,
    rows: 5
  },
  {
    date: new Date(2022, 5),
    offsetBefore: 3,
    offsetAfter: 2,
    rows: 5
  }
];

describe('MonthView', () => {
  describe('when passing a date', () => {
    it('should render the correct number of days in the month', () => {
      const date = new Date(2018, 11); // December 2018
      const wrapper = shallow(<MonthView date={date} />);

      expect(wrapper.find('.day :not(day--offset)').length).toBe(31);
    });

    it("should calculate the correct number of days to offset before and after the given month's days", () => {
      for (const { date, offsetBefore, offsetAfter } of testCases) {
        const wrapper = shallow(<MonthView date={date} />);
        const allDays = wrapper.find('.day');

        for (let i = 0; i < allDays.length; i++) {
          const { className } = allDays.at(i).props();

          if (i < offsetBefore || i >= allDays.length - offsetAfter) {
            expect(className).toEqual(expect.stringContaining('day--offset'));
          } else {
            expect(className).toEqual(expect.stringContaining('day'));
            expect(className).not.toEqual(
              expect.stringContaining('day--offset')
            );
          }
        }
      }
    });

    it('should render only the necessary number of lines', () => {
      for (const { date, rows } of testCases) {
        const wrapper = shallow(<MonthView date={date} />);

        expect(wrapper.find('.day').length / 7).toBe(rows);
      }
    });
  });
});
