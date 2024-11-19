//Step 6
import './Counter.css'
import {useState} from "react";

import CounterButton from "./CounterButton";

//Step 12
export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCounterParent(by) {
        setCount(count + by);
    }

    function decrementCounterParent(by) {
        setCount(count - by);
    }

    function someMethodInParent(){
        console.log('parent method called');
    }

    function resetCounter() {
        setCount(0);
    }

    //Step 13
    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1}
                           incrementMethod={incrementCounterParent}
                           decrementMethod={decrementCounterParent}></CounterButton>
            <CounterButton by={2}
                           incrementMethod={incrementCounterParent}
                           decrementMethod={decrementCounterParent}></CounterButton>
            <CounterButton by={5}
                           incrementMethod={incrementCounterParent}
                           decrementMethod={decrementCounterParent}></CounterButton>
            <button className="resetButton"
                    onClick={resetCounter}
                    >Reset</button>
        </>
    )
}
