import Paciente from './Paciente'

const ListaPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className='w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            {pacientes && pacientes.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
                    <p className='text-xl mt-10 text-center'>
                        Administrar tus {" "}
                        <span className='text-bold text-indigo-600 text-xl'>Pacientes y Citas</span>
                    </p>
                    {
                        pacientes.map((paciente) => (
                            <Paciente
                                paciente={paciente}
                                key={paciente.id}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))
                    }
                </>

            ) : (
                <>
                    <h2 className='font-black text-3xl text-center text-red-500'>No hay pacientes</h2>
                    <p className='text-xl mt-10 text-center'>
                        Comienza agregando {" "}
                        <span className='text-bold text-indigo-600 text-xl'>Pacientes y Citas</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListaPacientes