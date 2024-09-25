export const createCart = (customer) => {
    return fetch('http://localhost:8088/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    }).then((res) => res.json());
  };