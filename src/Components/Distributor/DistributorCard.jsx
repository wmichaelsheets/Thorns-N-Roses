import { useEffect, useState } from 'react';
import './DistributorCard.css';
import { getDistributorsById } from '../../Services/DistributorService';
import { getFlowersFromJoinTable } from '../../Services/FlowerServices';


export const DistributorCard = ({ distributor }) => {

    const [nurseryDist, setNurseryDist] = useState ([])
    const [flowersFromJoin, setFlowersFromJoin] = useState ([])

    useEffect(() => {
        getDistributorsById(distributor.id).then(nurseDistArr => setNurseryDist(nurseDistArr))

        getFlowersFromJoinTable().then(flowersArr => setFlowersFromJoin(flowersArr))

    },[])

    useEffect(() => {
        const mappedFilteredFlowers = nurseryDist.map(dist => {
            return (
                flowersFromJoin.find((flower) => flower.nurseId === dist.nurseId)
            
            )
        })
        console.log(mappedFilteredFlowers)

    }, [flowersFromJoin])
        return(
            <div className='distributor-card'>
                <h2>{distributor.businessName}</h2>
            </div>
        )
}

//  

//   return (
//     <div className="listCard">
//       <h2>{nursery.name}</h2>
//       {filteredFlowers.length > 0?(
//       <ul>
//         {filteredFlowers.map((flower, index) => (
//           <li
//             key={flower?.id || index}
//           >{`$ ${nursery.flowersJoin[0].price} ${flower?.color} ${flower?.species} `}</li>
//         ))}
//         {currentNurseryDist.map((nurseryDist) => (
//           <li key={nurseryDist.distributor.id}>
//             {nurseryDist.distributor.businessName}
//           </li>
//         ))}
//       </ul>
//         ):(<p>no flowers in nursery</p>)}
//     </div>
//   );
// };




//const [flowers, setFlowers] = useState([]);
//   const [filteredFlowers, setFilteredFlowers] = useState([]);
//   const [distributors, setDistributors] = useState([]);
//   const [filteredDistributors, setFilteredDistributors] = useState([]);
//   const [currentNurseryDist, setCurrentNurseryDist] = useState([]);

//   useEffect(() => {
//     getAllFlowers().then((flowerArray) => {
//       setFlowers(flowerArray);
//     });

//     getAllDistributors().then((distributorsArr) =>
//       setDistributors(distributorsArr)
//     );

//     getDistributorByNurseryId(nursery.id).then((currentDist) =>
//       setCurrentNurseryDist(currentDist)
//     );
//   }, []);

//   useEffect(() => {
//     if (nursery.flowersJoin.length > 0) {
//       const mappedFlowers = nursery.flowersJoin.map((nurseryFlower) => {
//         return flowers.find((flower) => flower.id === nurseryFlower.flowerId);
//       });
//       setFilteredFlowers(mappedFlowers);
//     }
//   }, [flowers, nursery.flowersJoin]);