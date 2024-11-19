import PropTypes from "prop-types";
import {useState} from "react";
//Step 14
export default function CounterButton({by, incrementMethod, decrementMethod}) {

    //Step 7.1
    // const state = useState(0);
    //Step 7.2
    //const [count, setCount] = useState(0);

    console.log(by)

    function incrementCounterFunction() {
        /*  state[1](state[0] + 1)
          console.log(state[0])
          console.log(state[1])
          setCount(count + 1)*/
       // setCount(count + by)
        incrementMethod(by)
        //console.log('increment clicked')
        //console.log(count)
    }

    //Step 8
    function decrementCounterFunction() {
       // setCount(count - by)
        decrementMethod(by)
        //console.log(count)
    }

    return (
        <div className="CounterApp">
            <div>
                <button className="counterButton"
                        onClick={() => incrementMethod(by)}
                    //style={buttonStyle}
                >+{by}
                </button>
                <button className="counterButton"
                        onClick={() => decrementMethod(by)}
                >-{by}
                </button>
            </div>
        </div>
    )
}

//Step 11
CounterButton.propTypes = {
    by: PropTypes.number
}
CounterButton.defaultProps = {
    by: 1
}