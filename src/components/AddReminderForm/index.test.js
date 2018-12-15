import React from 'react';
import { shallow } from 'enzyme';
import { AddReminderForm } from './';

describe('AddReminderForm', () => {
  describe('when submitting the form', () => {
    it('should invoke the onSubmit and afterSubmit properties', () => {
      const onSubmit = jest.fn();
      const afterSubmit = jest.fn();
      const wrapper = shallow(
        <AddReminderForm onSubmit={onSubmit} afterSubmit={afterSubmit} />
      );

      expect(onSubmit).not.toHaveBeenCalled();
      expect(afterSubmit).not.toHaveBeenCalled();

      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

      expect(onSubmit).toHaveBeenCalled();
      expect(afterSubmit).toHaveBeenCalled();
    });
  });
});
