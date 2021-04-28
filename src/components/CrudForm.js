import React, { useEffect, useState } from "react";

const initialForm = {
  name: '',
  constellation: '',
  id: null
}

export const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if(dataToEdit){
      setForm(dataToEdit)
    }else{
      setForm(initialForm)
    }
  }, [dataToEdit])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    //VALIDAMOS QUE NO VENGAN CAMPOS VACIOS 
    if(!form.name || !form.constellation){
      alert('Datos Incompletos')
      return 
    }

    //SI EL ID VIENE CON VALOR NULL, CREAMOS UN DATO NUEVO
    if(form.id === null){
      createData(form)
    }else{
      updateData(form)
    }

    handleReset()
  };

  const handleReset = () => {
    setForm(initialForm)
    setDataToEdit(null)
  };
  
  return (
    <div>
      {
      dataToEdit == null ? <h3>Agregar</h3> : <h3>Editar</h3>
      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
          autoComplete="off"
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelación"
          onChange={handleChange}
          value={form.constellation}
          autoComplete="off"

        />
        <input type="submit" value="Enviar"/>
        <input type="reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </div>
  );
};
