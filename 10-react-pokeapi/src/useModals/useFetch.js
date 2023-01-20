import { useEffect, useState } from "react";

export const useFetch=(url)=>{
    const[resultado,setResultado] = useState({cargando:true,data:null});

    useEffect(()=>{
        getData(url);
    },[url]);

    async function getData(url){
        try {
            setResultado({cargando:true,data:null});
            let res = await fetch(url),
            data = await res.json();
            setResultado({cargando:false,data:data})
        } catch (err) {
            console.log(err);
        }
    }

    return resultado;
};