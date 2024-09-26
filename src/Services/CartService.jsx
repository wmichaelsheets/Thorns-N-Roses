export const createCart = (customer) => {
  return fetch('http://localhost:8088/carts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
};

export const getCartItemsByCustomerId = (customerId) => {
  return fetch(
    `http://localhost:8088/carts?customerId=${customerId}&_expand=flower`
  ).then((res) => res.json());
};
