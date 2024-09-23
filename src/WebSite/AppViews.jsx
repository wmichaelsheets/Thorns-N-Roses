import { Outlet, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';

export const AppViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/nurseries" element={<div>Text</div>} />
        <Route path="/distributors" element={<></>} />
        <Route path="/retailers" element={<></>} />
      </Route>
    </Routes>
  );
};
