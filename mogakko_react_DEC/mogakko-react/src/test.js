// 외부 모듈인 useState를 사용하기 위해 import한다. 
// react에서 useState Hook 불러오기.
import { useState } from 'react';

// 초기값 = 0
// 함수를 호출하면 배열이 반환되기 때문에 상태변수(number)와 상태 값 변경 함수(setNumber)를 받아와야 한다.
const [number, setNumber] = useState(0);

setNumber(100)

function sum(a, b) {
    return a + b;
}


// 순수함수가 아닌 예
function conversion(a, b){
    a.total -= b;
}
