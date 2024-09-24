import { useEffect, useState } from 'react';
import './DistributorList.css';
import { DistributorCard } from './DistributorCard';
import { getAllDistributors } from '../../Services/DistributorService';

export const DistributorList = () => {
  const [distributors, setDistributors] = useState([]);

//   useEffect(() => {
//     getAllDistributors().then(distributorsArr => setDistributors(distributorsArr))
//     })
//   }, []
    useEffect (() => {
        getAllDistributors().then(distributorsArr => setDistributors(distributorsArr))
    }, [])

  return (
    <div className="list-wrapper">
      {distributors.map((distributor) => {
        return <DistributorCard distributor={distributor} key={distributor.id} />
      })}
    </div>
  )
}

