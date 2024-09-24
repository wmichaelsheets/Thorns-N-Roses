import { useEffect, useState } from 'react';
import './NurseryList.css';
import { getFlowerByNursery } from '../../Services/NurseryService';
import { NurseryCard } from './NurseryCard';

export const NurseryList = () => {
  const [nurserys, setNurserys] = useState([]);

  useEffect(() => {
    getFlowerByNursery().then((flowerArray) => {
      setNurserys(flowerArray);
    });
  }, []);

  return (
    <div className="list-wrapper">
      {nurserys.map((nursery) => {
        return <NurseryCard nursery={nursery} key={nursery.id} />;
      })}
    </div>
  );
};
