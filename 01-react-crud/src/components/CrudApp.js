import React,{ useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb =[
    {
        id:1,
        name:"Tanjiro",
        elemento:"Agua"
    },
    {
        id:2,
        name:"Inosuke",
        elemento:"Bestia"
    },
    {
        id:3,
        name:"Zenitsu",
        elemento:"Rayo"
    },
    {
        id:4,
        name:"Uzui",
        elemento:"Rayo"
    },
    {
        id:5,
        name:"Rengoku",
        elemento:"Fuego"
    },
];

const CrudApp=()=>{
    const[db,setDb] = useState(initialDb);
    const[dataToEdit,setDataToEdit] = useState(null);

    const createData=(data)=>{
        data.id = Date.now();
        setDb([...db,data]);
    };

    const updateData=(data)=>{
        let newData = db.map((el)=> (el.id===data.id? data:el));
        setDb(newData);
    };

    const deleteData=(id)=>{
        let isDelete = window.confirm(`Esta seguro que quiere eliminar el campo con el id:${id}?`);
        if(isDelete){
            let newData = db.filter(el=> el.id!==id);
            setDb(newData);
        }else{
            return;
        }
    };

    return(
        <article>
            <h1>CRUD TABLE</h1>
            <CrudForm 
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            <CrudTable 
            data={db}
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData}
            />
        </article>
    );
};

export default CrudApp;