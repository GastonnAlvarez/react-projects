import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import ListaPacientes from './components/ListaPacientes'
import Header from './components/header'

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacienteEliminado = pacientes.filter((pacienteElim) => pacienteElim.id !== id);
    setPacientes(pacienteEliminado);
  };

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListaPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
