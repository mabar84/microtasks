import React from 'react';
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


    return (
        <>
            <Button callBack={() => callBackFoo1('Vasia')} buttonName={'Channel-1'}/>
            <Button callBack={() => callBackFoo2('Ivan')} buttonName={'Channel-2'}/>
            <Button callBack={callBackFoo3} buttonName={'Stupid'}/>
        </>
    );
}

export default App;