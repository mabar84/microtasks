import React, {useState} from 'react';
import {Button} from "./components/Button";

function App() {


    const callBackFoo1 = (subscriberName1: string) => {
        console.log(subscriberName1)
    }
    const callBackFoo2 = (subscriberName2: string) => {
        console.log(subscriberName2)
    }
    const callBackFoo3 = () => {
        console.log('im stupid button')
    }


    let [a, setA] = useState(1)

    const callBackIncreaseA = () => {
        setA(++a)
        console.log(a)
    }
    const callBack0 = () => {
        setA(0)
        console.log(a)
    }


    return (
        <>
            <h1>{a}</h1>
            <Button callBack={() => callBackFoo1('Vasia')} buttonName={'Channel-1'}/>
            <Button callBack={() => callBackFoo2('Ivan')} buttonName={'Channel-2'}/>
            <Button callBack={callBackFoo3} buttonName={'Stupid'}/>
            <Button callBack={callBackIncreaseA} buttonName={'a+'}/>
            <Button callBack={callBack0} buttonName={'0'}/>
        </>
    );
}

export default App;