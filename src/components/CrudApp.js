import React, { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id= Date.now()
    setDb([
      ...db,
      data
    ])
    console.log(db);
  };

  const updateData = (data) => {
    let newData = db.map( el => el.id === data.id ? data : el)
    setDb(newData)
    
  };

  const removeData = (id) => {
    let isDelete = window.confirm(`Estas seguro de eliminar el registro con id ${id}?`)
    if(isDelete){
      const newData = db.filter( el => el.id !== id)
      setDb(newData)
    }    
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">  
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          removeData={removeData}
        />
      </article>
    </div>
  );
};
