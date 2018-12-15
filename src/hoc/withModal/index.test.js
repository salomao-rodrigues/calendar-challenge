import React from 'react';
import { shallow } from 'enzyme';
import withModal from './';

const TestComponent = () => null;
const ComponentWithModal = withModal(TestComponent);

describe('withModal HOC', () => {
  describe('when passed a component', () => {
    it('should render the passed in component with modal props', () => {
      const expectedProps = ['modalIsOpen', 'openModal', 'closeModal'];
      const wrapper = shallow(<ComponentWithModal component={TestComponent} />);
      const passedComponent = wrapper.find(TestComponent);
      const existingProps = Object.keys(passedComponent.props());

      expect(existingProps).toEqual(expect.arrayContaining(expectedProps));
    });

    it('should handle opening and closing the modal', () => {
      const wrapper = shallow(<ComponentWithModal component={TestComponent} />);

      expect(wrapper.find(TestComponent).prop('modalIsOpen')).toBe(false);

      wrapper.instance().openModal();
      expect(wrapper.find(TestComponent).prop('modalIsOpen')).toBe(true);

      wrapper.instance().closeModal();
      expect(wrapper.find(TestComponent).prop('modalIsOpen')).toBe(false);
    });
  });
});
