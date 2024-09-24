export const getAllDistributors = () => {
    return fetch('http://localhost:8088/distributors').then((res) =>
        res.json()
    )
}

export const getDistributorsById = (distributorId) => {
    return fetch(`http://localhost:8088/ndJoin?distributorId=${distributorId}`).then((res) =>
        res.json()
    )
}