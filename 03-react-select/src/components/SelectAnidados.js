import React,{useState} from 'react';
import SelectList from './SelectList';

const SelectAnidados=()=>{
    const[state,setState] = useState("");
    const[town,setTown] = useState("");
    const[suburn,setSuburn] = useState("");

    const token=`29bd0cd6-148c-4180-a75b-cf5eeb758af4`;

    return(
        <div>
            <h1>Select Anidados</h1>
            <SelectList 
            title="estado" 
            url={`https://api.copomex.com/query/get_estados?token=${token}`}
            handleChange={(e)=> setState(e.target.value)}/>

            {state && <SelectList 
            title="municipios" 
            url={`https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=${token}`} 
            handleChange={(e)=> setTown(e.target.value)}/>}
            
            {town && <SelectList 
            title="colonia" 
            url={`https://api.copomex.com/query/get_colonia_por_cp/09810?token=${token}`}
            handleChange={(e)=> setSuburn(e.target.value)}/>}
            
            <pre>
                <code>
                    {state} - {town} - {suburn}
                </code>
            </pre>
        </div>
    );
};

export default SelectAnidados;