import React from 'react';
import { Route } from 'react-router-dom';

// components
import { ModalContainer } from './components/ModalVideoPlayer';

function App() {
  return (
    <div className="App">
      
      <Route path= '/'>
        <ModalContainer />
      </Route>

    </div>
  );
}

export default App;
