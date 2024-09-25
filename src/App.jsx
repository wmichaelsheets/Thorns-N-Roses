import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AppViews } from './WebSite/AppViews';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import { Authorized } from './WebSite/Authorized';

import React from 'react';
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div>
      <div className="margins left"></div>
      <div className="margins right"></div>
      <div id="root">
      <AppViews />;
      </div>
    </div>
=======
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <AppViews />
          </Authorized>
        }
      />
    </Routes>
>>>>>>> fa769b395a97e11fa1c20e40b9604ebd21c84d44
  );
}

export default App;
