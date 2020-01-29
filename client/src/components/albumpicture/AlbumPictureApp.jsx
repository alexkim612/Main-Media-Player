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
      <div onClick={this.openModal}>
        <CoverArt src={this.props.song.albumURL}/>

        {this.state.isModalOpen ? 
        <Modal closeModal={this.closeModal} isModalOpen={this.state.isModalOpen}> 
          Hello from modal
        </Modal> 
        : null}
        
      </div>
    );
  }
}

//CSS Styled-components

const CoverArt = styled.img`
  width: 100%;
`;

export default AlbumPictureApp