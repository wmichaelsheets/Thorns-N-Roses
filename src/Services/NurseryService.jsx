export const getFlowerByNursery = () => {
  return fetch('http://localhost:8088/nurserys?_embed=flowersJoin').then(
    (res) => res.json()
  );
};

export const getDistributorByNurseryId = (nurseryId) => {
  return fetch(
    `http://localhost:8088/ndJoin?nurseryId=${nurseryId}&_expand=distributor`
  ).then((res) => res.json());
};
