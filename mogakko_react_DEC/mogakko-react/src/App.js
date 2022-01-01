import React, { useState } from 'react'
import Button from './Button'
import Dan from './99dan'

function App() {
  const [number, setNumber] = useState(0);

  function Add() {
    setNumber(number + 1);
  }

  function Sub() {
    setNumber(number - 1);
  }

  function RandNum() {
    let a = Math.floor(Math.random() * 10) //Math.floor(n)): n보다 크지 않은 최대의 정수 반환
    // rand: 50% 확률로 a를 number에 더하거나 뺀다.
    let rand = Math.round(Math.random())
    if (rand === 1)
      setNumber(number + a);
    else
      setNumber(number - a);
  }

  return (
    <center>
      {/* Button 컴포넌트에 onClike={Add}, text="+1"를 인자로 주어 호출. => props*/}
      <Dan number={number}>
        <div>구구단? 아니, {number}구단!</div>
      </Dan>
      <Button onClick={Add} text="+1"></Button>
      <Button onClick={Sub} text="-1"></Button>
      <Button onClick={RandNum} text="Random"></Button>
    </center>
  )
}
export default App;
