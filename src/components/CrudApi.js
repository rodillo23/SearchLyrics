import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  let api = helpHttp()
  let url = 'http://localhost:5000/santos'

  useEffect(() => {
    setLoading(true)
    api.get(url)
      .then(res => {
        if(!res.err){
          setDb(res)
          setError(null)
        }else{
          setDb(null)
          setError(res)
        }
        setLoading(false)
      })
  }, [])

  const createData = (data) => {
    data.id= Date.now()
    api.post(url, {body: data, headers: {"content-type": "application/json"}})
      .then( res => {
        console.log(res)
        if(!res.error){
          setDb([
            ...db,
            res
          ])
        }else{
          setError(res)
        }
      })
  };

  const updateData = (data) => {
    
    api.put(`${url}/${data.id}`, {body: data, headers: {"content-type": "application/json"}})
      .then(res => {
        if(!res.err){
          let newData = db.map( el => el.id === data.id ? data : el)
          setDb(newData)
        }else{
          setError(res)
        }
      })
  };

  const removeData = (id) => {
    let isDelete = window.confirm(`Estas seguro de eliminar el registro con id ${id}?`)

    if(isDelete){
      api.del(`${url}/${id}`, {headers: {"content-type": "application/json"}})
      .then(res => {
        if(!res.err){
          const newData = db.filter( el => el.id !== id)
          setDb(newData) 
        }else{
          setError(res)
        }
      })
    }    
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">  
        
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        { loading && <Loader/> }

        { error && <Message msg={`Error ${error.status} : ${error.statusText}`} bgColor="#dc3545"/> }
        
        { db && <CrudTable 
                  data={db}
                  setDataToEdit={setDataToEdit}
                  removeData={removeData}
        /> }
        
      </article>
    </div>
  );
};
