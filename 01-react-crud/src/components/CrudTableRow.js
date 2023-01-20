import React from "react";
const CrudTableRow = ({ el,setDataToEdit,deleteData }) => {
    const {name,elemento,id} = el
    return(
        <tr>
            <td>{name}</td>
            <td>{elemento}</td>
            <td>
                <button onClick={()=>setDataToEdit(el)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;