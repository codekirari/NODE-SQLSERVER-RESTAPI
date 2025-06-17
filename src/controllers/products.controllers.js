export const getProduct= (req, res) => {
    res.send('Lista de citas');
}

export const getProducts = (req, res) => {
    res.send('Obteniendo una sola cita');
}

export const createCitas = (req, res) => {
    res.send('Creando una nueva cita');
}

export const updateCitas = (req, res) => {
    res.send('Actualizando una cita');
}

export const deleteCitas = (req, res) => {
    res.send('Eliminando una cita');
}



