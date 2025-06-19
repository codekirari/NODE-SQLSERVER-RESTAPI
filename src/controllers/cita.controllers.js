// import

export const getCitas = (req, res) => {
    res.send('Lista de citas');
};

export const getCita = (req, res) => {
    res.send('Obteniendo una sola cita');
};

export const createCita = (req, res) => {
    res.send('Creando una nueva cita');
};

export const updateCita = (req, res) => {
    res.send('Actualizando una cita');
};

export const deleteCita = (req, res) => {
    res.send('Eliminando una cita');
};