import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getCartItemsByCustomerId } from '../../Services/CartService';

export const Cart = ({ currentUser }) => {
  const [currentUserCartItems, setCurrentUserCartItems] = useState([]);
  const [flowerSummary, setFlowerSummary] = useState([]);
  useEffect(() => {
    getCartItemsByCustomerId(currentUser.id).then((cartsArr) =>
      setCurrentUserCartItems(cartsArr)
    );
  }, [currentUser]);

  useEffect(() => {
    const summarizeFlowers = () => {
      const summary = {};

      currentUserCartItems.forEach((item) => {
        const { flower, price } = item;
        const { species, color } = flower;
        const priceNumber = parseFloat(price.replace('$', '')); // Convert price string to number

        const key = `${species}-${color}`;

        // If flower already exists in summary, update the quantity and total cost
        if (summary[key]) {
          summary[key].quantity += 1;
          summary[key].totalCost += priceNumber;
        } else {
          // Otherwise, create a new entry
          summary[key] = {
            species,
            color,
            quantity: 1,
            totalCost: priceNumber,
          };
        }
      });

      // Convert the summary object to an array for easier rendering
      const summaryArray = Object.values(summary);
      setFlowerSummary(summaryArray);
    };

    if (currentUserCartItems.length > 0) {
      summarizeFlowers();
    }
  }, [currentUserCartItems]);

  return (
    <div>
      <h2>My Cart</h2>
      {flowerSummary.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Flower</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {flowerSummary.map((flower, index) => (
              <tr key={index}>
                <td>{`${flower.color} ${flower.species}`}</td>
                {/* <td>{flower.color}</td> */}
                <td>{flower.quantity}</td>
                <td>${flower.totalCost.toFixed(2)}</td>{' '}
                {/* Format total cost to 2 decimal places */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// const [retailers, setRetailers] = useState([]);
// const [selectedRetailer, setSelectedRetailer] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// useEffect(() => {
//   fetch('http://localhost:8088/retailers')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch retailers');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       setRetailers(data);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.error('Error fetching retailers:', error);
//       setError(error.message);
//       setLoading(false);
//     });
// }, []);
// const handleSelectChange = (e) => {
//   const retailerId = e.target.value;
//   const retailer = retailers.find(
//     (retailer) => retailer.id === parseInt(retailerId)
//   );
//   setSelectedRetailer(retailer);
// };
// if (loading) return <p>Loading retailers...</p>;
// if (error) return <p>Error loading retailers: {error}</p>;
// return (
//   <div className="cart-container">
//     <h1>Cart</h1>
//     <label htmlFor="retailer-select">Choose a retailer:</label>
//     <select
//       id="retailer-select"
//       onChange={handleSelectChange}
//       defaultValue=""
//     >
//       <option value="" disabled>
//         Select a retailer
//       </option>
//       {retailers.length > 0 ? (
//         retailers.map((retailer) => (
//           <option key={retailer.id} value={retailer.id}>
//             {retailer.businessName}
//           </option>
//         ))
//       ) : (
//         <option disabled>No retailers available</option>
//       )}
//     </select>
//     {selectedRetailer && (
//       <div className="retailer-details">
//         <h2>Selected Retailer: {selectedRetailer.businessName}</h2>
//         <p>
//           <strong>Location:</strong> {selectedRetailer.address}
//         </p>
//       </div>
//     )}
//   </div>
// );
