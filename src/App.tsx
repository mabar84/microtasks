import React, {useState} from 'react';
import {Button} from "./components/Button";
import {Money} from "./components/money";

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
        // setA((prev) => prev + 1);

        setA(++a)
        console.log(a)
    }
    const callBack0 = () => {
        setA(0)
        console.log(a)
    }

    const money = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]
    //
    // const [filteredMoney, setFilteredMoney] = useState(money)
    //
    // const filterMoney = (filter: string) => {
    //     setFilteredMoney(money.filter(el => el.banknots === filter))
    //     if (filter === 'all') {
    //         setFilteredMoney(money)
    //     }
    // }
    //
    // const moneyFromMap = filteredMoney.map((el, ind) => {
    //     return (
    //         <li key={ind}>
    //             {el.banknots} {el.value} {el.number}
    //         </li>
    //     )
    // })


    return (
        <>
            <h1>{a}</h1>
            <Button callBack={() => callBackFoo1('Vasia')} buttonName={'Channel-1'}/>
            <Button callBack={() => callBackFoo2('Ivan')} buttonName={'Channel-2'}/>
            <Button callBack={callBackFoo3} buttonName={'Stupid'}/>
            <Button callBack={callBackIncreaseA} buttonName={'a+'}/>
            <Button callBack={callBack0} buttonName={'0'}/>

            <Money money={money}/>

        </>
    );
}

export default App;