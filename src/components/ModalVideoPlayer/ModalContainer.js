// modalContainer
// logic file

import React from 'react';

// styles
import './Modal.scss';

// components
import VideoPlayer from './VideoPlayer';

const ModalContainer = (props) => {

  return (
    <div data-testid= 'modalCont' className= 'modalCont'>
      <VideoPlayer />
    </div>
  )
}

export {ModalContainer};