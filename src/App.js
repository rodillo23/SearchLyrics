import React from 'react';
import { SelectsAnidados } from './components/SelectsAnidados';
//import { CrudApi } from './components/CrudApi';
//import { CrudApp } from "./components/CrudApp";
import { SongSearch } from './components/SongSearch';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      {/* <SongSearch/> */}
      <SelectsAnidados/>
      <hr/>
      {/* <CrudApi/>
      <hr/>
      <CrudApp/>
      <hr/> */}
    </>
  );
}

export default App;
