import { useState } from 'react'

const ReactHook = () => {

    const [counter, setCounter] = useState(100)

    function increase() {
        //alert((`Umm kese ho jiii batao na !`))
        setCounter(counter + 10)
    }

    function decrease() {
        setCounter(counter - 10)
    }

    return (
        <div>
            <h2>Working on ReactHook</h2>
            <h1>Count value = {counter}</h1>
            <button onClick={increase}>Increase Count </button>
            <button onClick={decrease}>Decrease Count </button>
        </div>
    )
}

export default ReactHook
