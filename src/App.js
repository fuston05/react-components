import React from 'react';
import { Route } from 'react-router-dom';

// components
import { VidModalContainer } from './components/ModalVideoPlayer';

const url = '/videos/SS_overView.mp4';

function App() {

  return (
    <div className="App">
      
      <Route path= '/'>
        <VidModalContainer url= {url} />
      </Route>

    </div>
  );
}

export default App;
