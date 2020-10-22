// modalContainer
// logic file

import React, { useState } from 'react';

// styles
import './Modal.scss';

// components
import VideoPlayer from './VideoPlayer';

const VidModalContainer = ({ url }) => {
  // set state back to false for default
  const [visible, setVisible] = useState(true);

  // move up to parent component and pass in as props
  // or create your own funciton to handle opening the modal
  const toggleModal = (e) => {
    console.log('toggled: ', visible)
    setVisible(!visible);
  }

  return (
    <>
      {visible && <div data-testid='modalCont' className='modalCont'>
        <div onClick= {(e) => {toggleModal(e)}} className= 'modalClose'>X</div>
        <VideoPlayer url={url}/>
      </div>}
    </>
  )
}

export {VidModalContainer};