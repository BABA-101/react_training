import './App.css';
import Button from './Button';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState(false);

  function onchange() {
    setValue(prevvalue => !prevvalue);
  };

  return (
    <div>
      <center>
        <h1> 리액트 7 - 2 QIUZ</h1>
        <Button onClick={onchange} text="Ture?"></Button>
        {value === true && <div> True! </div>}

      </center>
    </div>
  );
}
export default App;
