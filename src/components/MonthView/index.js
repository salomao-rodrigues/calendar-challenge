import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import withModal from '../../hoc/withModal';
import AddReminderForm from '../AddReminderForm';
import './MonthView.scss';

const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export class MonthView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedDate: props.date || new Date() };
  }

  onDateClickHandler = day => {
    const selectedDate = new Date(this.state.selectedDate.getTime());
    selectedDate.setDate(day);

    this.setState({ selectedDate }, this.props.openModal());
  };

  render() {
    const { reminders = [], modalIsOpen, closeModal } = this.props;
    const { selectedDate } = this.state;

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const totalDays = daysInMonth(month, year);
    const startOffset = new Date(year, month, 1).getDay();
    const endOffset = 7 - ((startOffset + totalDays) % 7);
    const numRows = (totalDays + startOffset + endOffset) / 7;

    return (
      <div
        className="month-container"
        style={{ gridTemplateRows: `32px repeat(${numRows}, auto)` }}
      >
        {WEEK_DAYS.map(day => (
          <div key={day} className="month-header">
            {day}
          </div>
        ))}
        {new Array(startOffset).fill().map((val, index) => (
          <div key={`start-offset-${index}`} className="day day--offset" />
        ))}
        {new Array(totalDays).fill().map((val, index) => (
          <div
            key={`${year}-${month}-${index}`}
            className="day"
            onClick={() => this.onDateClickHandler(index + 1)}
          >
            {index + 1}
          </div>
        ))}
        {new Array(endOffset).fill().map((val, index) => (
          <div key={`end-offset-${index}`} className="day day--offset" />
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyle}
        >
          <AddReminderForm date={selectedDate} afterSubmit={closeModal} />
        </Modal>
      </div>
    );
  }
}

MonthView.propTypes = {
  closeModal: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  modalIsOpen: PropTypes.bool,
  openModal: PropTypes.func,
  reminders: PropTypes.array
};

export default compose(
  withModal,
  connect(reminders => ({ reminders }))
)(MonthView);
