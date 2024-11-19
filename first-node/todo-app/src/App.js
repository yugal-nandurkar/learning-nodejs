import './App.css';
import ComponentHolder from "./components/first-node/ComponentHolder";
import Counter from "./components/counter-app/Counter";

function App() {
  return (
    <div className="App">
      Counter Application
      <Counter></Counter>
    </div>
  );
}

//Step 1.1 moved to FirstComponent
// Step 2.1 moved to SecondComponent

//Step 9
/*
function PlayingWithProps(properties)
{
    console.log(properties);
    console.log(properties.property1);
    console.log(properties.property2);
    return (
        <div>Props</div>
    )
}*/

//Step 10
function PlayingWithProps({property1, property2})
{
    console.log(property1);
    console.log(property2);
    return (
        <div>Props</div>
    )
}
export default App;
