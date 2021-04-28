import React from 'react'

export const CrudTableRow = ({el, setDataToEdit, removeData}) => {
  const {name, constellation, id} = el
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => removeData(id)}>Eliminar</button>
      </td>
    </tr>
  )
}
