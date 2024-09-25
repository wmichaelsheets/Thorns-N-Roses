import { useEffect, useState } from 'react';
import './RetailersCard.css';
import { getDistributorsByIdAndExpandDist } from '../../Services/DistributorService';
import { getAndExpandNurseryAndFlower } from '../../Services/FlowerServices';

export const RetailersCard = ({ retailer }) => {
  const [retailDistributor, setRetailDistributor] = useState({});
  const [flowerAndNursery, setFlowerAndNursery] = useState([]);

  useEffect(() => {
    getDistributorsByIdAndExpandDist(retailer.distributorId).then((distArr) => {
      const distObj = distArr[0];
      setRetailDistributor(distObj);
    });
  }, [retailer]);

  useEffect(() => {
    if (retailDistributor.nurseId) {
      getAndExpandNurseryAndFlower(retailDistributor.nurseId).then(
        (expandedArr) => setFlowerAndNursery(expandedArr)
      );
    }
  }, [retailDistributor]);

  return (
    <div className="retailer-card">
      <h2>{retailer.businessName}</h2>
      <p>{retailer.address}</p>
      <p>{retailDistributor.distributor?.businessName}</p>
      {flowerAndNursery.length ? (
        <ul>
          {flowerAndNursery.map((obj) => {
            const distributorMarkUp =
              obj.price *
              (1 + retailDistributor.distributor.markUpPercentage / 100);

            const retailMarkUp =
              distributorMarkUp * (1 + retailer.markupPercentage / 100);

            const finalMarkUpPrice = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(retailMarkUp);

            return (
              <li
                key={obj.id}
              >{` Flower: ${obj.flower.color} ${obj.flower.species} (${finalMarkUpPrice})
                   Nursery: ${obj.nurse.name}
              `}</li>
            );
          })}
        </ul>
      ) : (
        <>No flowers</>
      )}
    </div>
  );
};
