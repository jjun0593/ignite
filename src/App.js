import React from 'react';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
function App() {

  return (
    <div>
      <GlobalStyles />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
