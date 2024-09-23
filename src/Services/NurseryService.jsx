export const getFlowerByNursery = () => {
    return fetch('http://localhost:8088/nurserys?_embed=flowersJoin').then((res) =>
        res.json()
    )
}


