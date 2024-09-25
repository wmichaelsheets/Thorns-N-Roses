import { useEffect, useState } from 'react';
import { getAllRetailers } from '../../Services/RetailerService';
import { RetailersCard } from './RetailersCard';

export const RetailersList = () => {
  const [retailers, setRetailers] = useState([]);

  useEffect(() => {
    getAllRetailers().then((retailersArr) => setRetailers(retailersArr));
  }, []);

  return (
    <div className="retailer-list-wrapper">
      {retailers.map((retailer) => {
        return <RetailersCard retailer={retailer} key={retailer.id} />;
      })}
    </div>
  );
};
