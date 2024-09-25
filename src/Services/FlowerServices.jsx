export const getAllFlowers = () => {
  return fetch('http://localhost:8088/flowers').then((res) => res.json());
};

export const getFlowersByNurseryId = (nurseryId) => {
  return fetch(
    `http://localhost:8088/flowersJoin?nurseId=${nurseryId}&_expand=flower`
  ).then((res) => res.json());
};

export const getFlowersFromJoinTable = () => {
  return fetch(`http://localhost:8088/flowersJoin?&_expand=flower`).then(
    (res) => res.json()
  );
};

export const getAndExpandNurseryAndFlower = (nurseryId) => {
  return fetch(
    `http://localhost:8088/flowersJoin?nurseId=${nurseryId}&_expand=nurse&_expand=flower`
  ).then((res) => res.json());
};
