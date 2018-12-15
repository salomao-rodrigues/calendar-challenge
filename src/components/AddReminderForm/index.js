import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';

import { addReminder } from '../../actions';

import './index.css';

export class AddReminderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: props.date || new Date(),
      title: ''
    };
  }

  onInputChangeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onDateChangeHandler = date => {
    this.setState({ date });
  };

  onSubmitHandler = event => {
    const { onSubmit, afterSubmit } = this.props;
    event.preventDefault();
    onSubmit(this.state.title, this.state.date);

    if (afterSubmit) {
      afterSubmit();
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <input
            type="text"
            name="title"
            onChange={this.onInputChangeHandler}
            placeholder="Title"
            required={true}
            maxLength={30}
          />
        </div>
        <div>
          <DateTimePicker
            onChange={this.onDateChangeHandler}
            value={this.state.date}
            required={true}
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

AddReminderForm.propTypes = {
  date: PropTypes.instanceOf(Date),
  onSubmit: PropTypes.func.isRequired,
  afterSubmit: PropTypes.func
};

export default connect(
  null,
  { onSubmit: addReminder }
)(AddReminderForm);
