import React from 'react';

const withModal = Component => (
  class ComponentWithModal extends React.Component {
  state = { modalIsOpen: false };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return <Component
      {...this.props}
      {...this.state}
      openModal={ this.openModal }
      closeModal={ this.closeModal }
    />;
  }
}
)

export default withModal;
