export const getFlowerByNursery = () => {
    return fetch('http://localhost:8088/nurseries?_embed=flowersJoin').then((res) =>
        res.json()
    )
}


