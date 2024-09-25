import { useEffect, useState } from 'react';
import './DistributorCard.css';
import { getDistributorsById } from '../../Services/DistributorService';
import { getFlowersFromJoinTable } from '../../Services/FlowerServices';
import { getAllRetailers } from '../../Services/RetailerService';

export const DistributorCard = ({ distributor }) => {
  const [nurseryDist, setNurseryDist] = useState([]);
  const [flowersFromJoin, setFlowersFromJoin] = useState([]);
  const [filteredFlowers, setFilteredFlowers] = useState([]);
  const [retailers, setRetailers] = useState([]);
  const [filteredRetailers, setFilteredRetailers] = useState([]);

  useEffect(() => {
    getDistributorsById(distributor.id).then((nurseDistArr) =>
      setNurseryDist(nurseDistArr)
    );

    getFlowersFromJoinTable().then((flowersArr) =>
      setFlowersFromJoin(flowersArr)
    );

    getAllRetailers().then((retailersArr) => setRetailers(retailersArr));
  }, []);

  useEffect(() => {
    const mappedFilteredFlowers = nurseryDist
      .map((dist) => {
        return flowersFromJoin.find(
          (flower) => flower.nurseId === dist.nurseId
        );
      })
      .filter((flower) => flower !== undefined);

    setFilteredFlowers(mappedFilteredFlowers);
  }, [flowersFromJoin]);

  useEffect(() => {
    const retailersForCurrentDist = retailers.filter(
      (retailer) => retailer.distributorId === distributor.id
    );

    setFilteredRetailers(retailersForCurrentDist);
  }, [retailers]);

  return (
    <div className="distributor-card">
      <h2>{distributor.businessName}</h2>

      {filteredFlowers.length > 0 ? (
        <ul>
          {filteredFlowers.map((flower) => {
            const pricedMarkedUp =
              flower.price * (1 + distributor.markUpPercentage / 100);
            const flowerPrice = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(pricedMarkedUp);

            return (
              <li key={flower.id}>
                {`Flower:${flower?.flower?.color} ${flower?.flower?.species} (${flowerPrice}`}
                )
              </li>
            );
          })}
          {filteredRetailers.map((retailer) => {
            return (
              <li key={retailer.id}>Retailer Name:{retailer.businessName}</li>
            );
          })}
        </ul>
      ) : (
        <p>No flowers bought yet...</p>
      )}
    </div>
  );
};

