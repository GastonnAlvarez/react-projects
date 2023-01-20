import React, { useEffect, useState } from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    // Mostrando Mensaje de Error
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion de Formulario
        if ([nombre, propietario, email, alta, sintomas].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        // ID aleatorio
        const generarId = () => {
            const random = Math.random().toString(36).slice(2);
            const date = Date.now().toString(36);

            return random + date;
        }

        // Llenado setFormulario
        const objetoPacientes = {
            nombre,
            propietario,
            email,
            alta,
            sintomas
        };

        // Editando Formulario
        if(paciente.id){
            objetoPacientes.id = paciente.id;
            const pacienteActualizado = pacientes.map(pacienteState=> pacienteState.id == paciente.id ? objetoPacientes : pacientes)

            setPacientes(pacienteActualizado);
            setPaciente({});
            
        }else{
            // Nuevo Registro
            objetoPacientes.id = generarId();
            setPacientes([...pacientes, objetoPacientes]);
        }

        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    };

    return (
        <div className='w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl mt-5 text-center'>Listado de Pacientes</h2>
            <p className='mb-10'>
                A&ntilde;ade Pacientes y {" "}
                <span className='font-bold text-indigo-600'>Administralos</span>
            </p>

            <form className='bg-white shadow-md rounded-lg py-10 px-5'
                onSubmit={handleSubmit}>
                {error && (<Error msg='Todos los Campos Son Obligatorios' />)}
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block'>A&ntilde;ade Mascota</label>
                    <input
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-red-600 rounded-md'
                        id='mascota'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario' className='block'>Nombre Propietario</label>
                    <input
                        type="text"
                        placeholder='Nombre del Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-red-600 rounded-md'
                        id='propietario'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='suEmail' className='block'>Ingrese Email</label>
                    <input
                        type="email"
                        placeholder='Ingrese Su Email@'
                        className='border-2 w-full p-2 mt-2 placeholder-red-600 rounded-md'
                        id='suEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='alta' className='block'>Fecha De Alta</label>
                    <input
                        type="date"
                        className='border-2 w-full p-2 mt-2 rounded-md'
                        id='alta'
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='sintoma' className='block'>Sintomas</label>
                    <textarea
                        className='border-2 w-full p-2 mt-2 rounded-md resize-none placeholder-red-600'
                        id='sintoma'
                        placeholder='Describe los Sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                    className='bg-indigo-600 font-bold w-full rounded-md text-white uppercase p-5
                     cursor-pointer hover:bg-indigo-800 transition-all'
                />
            </form>
        </div>
    )
}

export default Formulario