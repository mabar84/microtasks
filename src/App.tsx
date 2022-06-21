import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export type FilterType = "all" | "ruble" | "dollar";

function App() {

    const [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {
        const newMessages = [{message: title}, ...message]
        setMessage(newMessages)
    }

    const callBack = () => {

        addMessage(title)
        setTitle("")
    }

    return (
        <div className={"App"}>

            {/*<FullInput addMessage={addMessage}/>*/}

            <Input title={title}
                   setTitle={setTitle}
            />
            <Button name={"+"} callBack={callBack}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>


    );
}

export default App;
