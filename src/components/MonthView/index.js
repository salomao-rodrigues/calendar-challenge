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

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const MonthView = ({
  date = new Date(),
  reminders = [],
  modalIsOpen,
  openModal,
  closeModal
}) => {
  const year = date.getFullYear();
  const month = date.getMonth();

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
          onClick={openModal}
        >
          {index + 1}
        </div>
      ))}
      {new Array(endOffset).fill().map((val, index) => (
        <div key={`end-offset-${index}`} className="day day--offset" />
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <AddReminderForm />
      </Modal>
    </div>
  );
};

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
