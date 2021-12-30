import React, { useState } from 'react';

function App() {
    const [number, setNumber] = useState(0)

    function onClick() {
        setNumber(number + 1)
    }

    return (
        <div>
            <div>값: {number} </div>
            <button onClick={onClick}>+1</button>
        </div>
    )
}
export default App;