import './App.css';
import { AppViews } from './WebSite/AppViews';

import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="margins left"></div>
      <div className="margins right"></div>
      <div id="root">
      <AppViews />;
      </div>
    </div>
  );
}

export default App;
