import { Outlet, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { NurseryList } from '../Components/Nursery/NurseryList';
import { DistributorList } from '../Components/Distributor/DistributorList';
import { RetailersList } from '../Components/Retailers/RetailersList';
import { Login } from '../../auth/Login';
import { Register } from '../../auth/Register';
import { Cart } from '../Components/Cart/CartList';

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
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nurseries" element={<NurseryList />} />
        <Route path="/distributors" element={<DistributorList />} />
        <Route path="/retailers" element={<RetailersList />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};
