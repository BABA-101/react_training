import React, { useState } from 'react';
import Button from './Button'
import Beggar from './Beggar.png';

function App() {
  const [money, setMoney] = useState(0);

  function Add() {
    setMoney(money + 500);
  }

  function Sub() {
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
      {/* Button 컴포넌트에 onClike={Add}, text="구걸하기"를 인자로 주어 호출.*/}
      <Button onClick={Add} text="구걸하기" />
      <Button onClick={Sub} text="돈뿌리기" />
      <Button onClick={randomcul} text="도박하기" />
    </center>
  )
}
export default App;