// modalContainer
// logic file

import React from 'react';


// styles
import './Modal.scss';

// components
import VideoPlayer from './VideoPlayer';

const VidModalContainer = ({url}) => {

  return (
    <div data-testid= 'modalCont' className= 'modalCont'>
      <VideoPlayer url={url}/>
    </div>
  )
}

export {VidModalContainer};