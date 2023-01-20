export const generarID = () => {
    const random = Math.random().toString(36).slice(2);
    const date = Date.now().toString(36);

    return random + date;
}

export const formatearFecha = fecha => {
    let nuevaFecha = new Date(fecha);

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return nuevaFecha.toLocaleDateString('es-ES', opciones);
};