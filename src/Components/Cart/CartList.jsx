import React, { useEffect, useState } from 'react';
import './CartCard.css';

export const Cart = () => {
  const [retailers, setRetailers] = useState([]);
  const [selectedRetailer, setSelectedRetailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8088/retailers')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch retailers');
        }
        return response.json();
      })
      .then((data) => {
        setRetailers(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching retailers:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSelectChange = (e) => {
    const retailerId = e.target.value;
    const retailer = retailers.find((retailer) => retailer.id === parseInt(retailerId));
    setSelectedRetailer(retailer);
  };

  if (loading) return <p>Loading retailers...</p>;
  if (error) return <p>Error loading retailers: {error}</p>;

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <label htmlFor="retailer-select">Choose a retailer:</label>
      <select id="retailer-select" onChange={handleSelectChange} defaultValue="">
        <option value="" disabled>Select a retailer</option>
        {retailers.length > 0 ? (
          retailers.map((retailer) => (
            <option key={retailer.id} value={retailer.id}>
              {retailer.businessName}
            </option>
          ))
        ) : (
          <option disabled>No retailers available</option>
        )}
      </select>
      {selectedRetailer && (
        <div className="retailer-details">
          <h2>Selected Retailer: {selectedRetailer.businessName}</h2>
          <p><strong>Location:</strong> {selectedRetailer.address}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
