import React, { useState } from 'react';
import Beggar from './Beggar.png';

function App() {
  const [money, setMoney] = useState(0);

  function ADD() {
    setMoney(money + 500);
  }

  function SUB() {
    setMoney(money - 500);
  }

  function randomcul() {
    if (money <= 0)
      alert("돈없으면 가라");
    let a = Math.round(Math.random())
    if (a === 1)
      setMoney(money * 10);
    else if (a === 0)
      setMoney(money / 100);
  }

  return (
    <center>
      <h1>거지키우기</h1>
      <img src={Beggar} width="300px" height="300px" alt='Beggar' />
      <div>남은 돈: {money} </div> <br></br>
      <button onClick={ADD}>구걸하기</button>
      <button onClick={SUB}>돈뿌리기</button>
      <button onClick={randomcul}>도박하기</button>
    </center>
  )
}
export default App;