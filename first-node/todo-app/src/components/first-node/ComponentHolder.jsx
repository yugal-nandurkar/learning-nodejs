// Step 4.1
import FirstComponent from './FirstComponent';
import {NestedComponent} from './FirstComponent';
import SecondComponent from './SecondComponent';
import LearningJS from "./LearningJS";

export default function ComponentHolder() {
    return (
        <div className="App">
            <FirstComponent>// Step 1.2</FirstComponent>
            <NestedComponent>//Step 3.4</NestedComponent>
            <SecondComponent>// Step 2.2</SecondComponent>
            <LearningJS>Step 4.2</LearningJS>
        </div>
    );
}