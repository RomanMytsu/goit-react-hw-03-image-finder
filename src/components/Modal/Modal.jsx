import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalItem, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.closeModal);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.closeModal);
  };

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { closeModal } = this;
    const { largeImageURL, tags } = this.props.item;

    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalItem>
          <img src={largeImageURL} alt={tags} />
        </ModalItem>
      </Overlay>,
      modalRoot
    );
  }
}
