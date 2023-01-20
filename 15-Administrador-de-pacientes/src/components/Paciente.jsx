const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    let { nombre, propietario, email, alta, sintomas, id } = paciente;

    const handleEliminar = () => {
        let eliminar = confirm("Desea Eliminar el Paciente ", nombre, "?");
        if (eliminar) {
            eliminarPaciente(id);
        }
    };
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='mb-3 font-bold text-grey-700 uppercase'>
                Nombre:
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='mb-3 font-bold text-grey-700 uppercase'>
                Pripietario:
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='mb-3 font-bold text-grey-700 uppercase'>
                Email:
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='mb-3 font-bold text-grey-700 uppercase'>
                Fecha de Alta:
                <span className='font-normal normal-case'>{alta}</span>
            </p>
            <p className='mb-3 font-bold text-grey-700 uppercase'>
                Sintoma:
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>
            <div className='flex justify-evenly align-middle mt-8'>
                <button className='bg-green-950 hover:bg-indigo-600 transition-colors duration-300 ease-in text-white rounded py-4 px-9'
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button className='bg-red-500 hover:bg-red-950 transition-colors duration-300 ease-in text-white rounded py-4 px-9' onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente