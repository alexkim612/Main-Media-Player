import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const modalroot = document.getElementById('modalroot');

function Modal(props) {
  return ReactDom.createPortal(
    <Modalwrapper onClick={props.toggleModal}>
      <ModalMain>
        <TitleAlbumArt>
          <SongHeader>
            <div>hello</div>
          </SongHeader>
          <AlbumArt src={props.picture} />
        </TitleAlbumArt>
      </ModalMain>
    </Modalwrapper>
    , modalroot);
}

//CSS Styled-components
const Modalwrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const ModalMain = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  width: 500px;
  height: 570px;
  transform: translate(-50%,-50%);
  display: flex;
  justify-content: space-evenly;
  border: red solid 2px;
  background: white;
`;

const TitleAlbumArt = styled.div`
  width: 470px;
  height: 540px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SongHeader = styled.div`
  width: 100%;
  font-size: 20px;
  padding-top: 20px;
  border-bottom: #80808045 solid 1px;
`;

const AlbumArt = styled.img`
  width: 100%
`;



export default Modal;

