import React from 'react';
import { Route, Link } from 'react-router-dom';

// components
import { VidModalContainer } from './components/ModalVideoPlayer';

const url = '/videos/SS_overView.mp4';

function App() {

  return (
    <div className="App">

      <Link className= 'link' to= '/modal'>See Video</Link>
      <Route path= '/modal'>
        <VidModalContainer url= {url} />
      </Route>

    </div>
  );
}

export default App;
