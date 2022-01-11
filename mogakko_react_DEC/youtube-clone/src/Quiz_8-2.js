import './App.css';
import Button from './Button';
import React, { useState } from 'react';
import styles from './Chcolor.module.css';

function App() {
  const [value, setValue] = useState(true);

  function onchange() {
    setValue(prevvalue => !prevvalue);
  };

  return (
    <div>
      <center>
        <h1> 리액트 7 - 3 QIUZ</h1>
        {value === true ? <div className={styles.true}> True!! </div> : <div className={styles.false}> False!! </div>}
        <br></br>
        <Button onClick={onchange} text="색바꾸기"></Button>
      </center>
    </div>
  );
}
export default App;
