import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

class AlbumPictureApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    if(!this.state.isModalOpen) {
      this.setState({
        isModalOpen: true
      });
    } else {
      this.setState({
        isModalOpen: false
      });
    }
  }


  render() {
    return (
      <div onClick={this.toggleModal}>
        <CoverArt src={this.props.song.albumURL}/>
          {this.state.isModalOpen ?
              <Modal toggleModal={this.toggleModal} songName={this.props.song.name} picture={this.props.song.albumURL}>
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