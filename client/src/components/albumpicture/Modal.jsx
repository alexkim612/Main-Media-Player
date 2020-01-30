import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const modalroot = document.getElementById('modalroot');

function Modal(props) {
  return ReactDom.createPortal(
    <Modalwrapper onClick={props.toggleModal}>
      <ModalMain >
        <AlbumArt src={props.picture} />
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
  top: 65%;
  left: 50%;
  position: fixed;
  width: 600px;
  height: 800px;
  transform: translate(-50%,-50%);
`;

const AlbumArt = styled.img`
  width: 100%;
`;



export default Modal;

