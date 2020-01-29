import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

class AlbumPictureApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }


  render() {
    return (
      <CoverArt src={`${this.props.song.albumURL}`} onClick={this.openModal}>
        {this.state.isModalOpen ? <Modal closeModal={this.closeModal} isModalOpen={this.state.isModalOpen}/> : null}
      </CoverArt>
    );
  }
}

//CSS Styled-components

{/* <div>
  <button onClick={this.toggleState}>Open Modal</button>
  <div>Modal is: {this.state.isModalOpen ? "Open" : "Closed"}</div>
  {this.state.isModalOpen && (
    <Modal
      id="modal"
      isOpen={this.state.isModalOpen}
      onClose={this.toggleState}
      class="my-class"
    >
      <div className="box-body">I am the content of the modal</div>
    </Modal>
  )}
</div> */}

const CoverArt = styled.img`
  width: 100%;
`;

export default AlbumPictureApp