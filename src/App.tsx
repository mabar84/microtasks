import React, {useState} from 'react';
// import {Button} from './components/Button';
// import {Money} from './components/money';
import {FullInput} from './components/FullInput';
import {Button} from './components/Button';
import {Input} from './components/Input';

function App() {
    console.log('app')
    //
    // const callBackFoo = (subscriberName: string) => {
    //     console.log(subscriberName)
    // }
    //
    // let [a, setA] = useState(1)
    //
    // const callBackIncreaseA = () => {
    //     setA(++a)
    //     console.log(a)
    // }
    // const callBack0 = () => {
    //     setA(0)
    //     console.log(a)
    // }
    //
    // const money = [
    //     {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    //     {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    //     {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    //     {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    //     {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    // ]
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

    const [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const messagesTexts = messages.map((m, i) => {
        return (
            <p key={i}>  {m.message} </p>
        )
    })

    const addMessage = (text: string) => {
        setMessages([{message: text}, ...messages])
    }

    const [text, setText] = useState<string>('')


    const callBack = () => {
        addMessage(text)
        setText('')
    }


    return (
        <>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input value={text} setText={setText}/>
            <Button callBack={callBack} buttonName={'+'}/>
            {/*<FullInput messages={messages} setMessages={setMessages}/>*/}
            {messagesTexts}

            {/*<h1>{a}</h1>*/}
            {/*<Button callBack={callBackIncreaseA} buttonName={'a+'}/>*/}
            {/*<Button callBack={callBack0} buttonName={'0'}/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<Button callBack={() => callBackFoo('Vasia')} buttonName={'Channel-1'}/>*/}
            {/*<Button callBack={() => callBackFoo('Ivan')} buttonName={'Channel-2'}/>*/}
            {/*<Button callBack={() => callBackFoo('Stupid')} buttonName={'Stupid'}/>*/}

            {/*<Money money={money}/>*/}
        </>
    );
}

export default App;