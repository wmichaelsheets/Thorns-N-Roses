import { Outlet, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { NurseryList } from '../Components/Nursery/NurseryList';
import { DistributorList } from '../Components/Distributor/DistributorList';
import { RetailersList } from '../Components/Retailers/RetailersList';

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
        <Route path="/nurseries" element={<NurseryList />} />
        <Route path="/distributors" element={<DistributorList />} />
        <Route path="/retailers" element={<RetailersList />} />
      </Route>
    </Routes>
  );
};
