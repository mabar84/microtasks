import React, { useState } from "react";
import "./App.css";
import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

export type FilterType = "all" | "ruble" | "dollar";

function App() {
  // const [message, setMessage] = useState([
  //     {message: "message1"},
  //     {message: "message2"},
  //     {message: "message3"},
  // ])

  // let [title, setTitle] = useState("")

  // const addMessage = (title: string) => {
  //     const newMessages = [{message: title}, ...message]
  //     setMessage(newMessages)
  // }

  // const callBack = () => {

  //     addMessage(title)
  //     setTitle("")
  // }

  //   let a = 1;
  let [a, setA] = useState(1);

  const onClickHandler = () => {
    setA(++a);
    console.log(a);
  };

  const onClickHandler0 = () => {
    setA(0);
  };

  return (
    <div className={"App"}>
      <h1>{a}</h1>

      <button onClick={onClickHandler}>number</button>
      <button onClick={onClickHandler0}>0</button>

      {/*<FullInput addMessage={addMessage}/>*/}

      {/* <Input title={title}
                   setTitle={setTitle}
            />
            <Button name={"+"} callBack={callBack}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })} */}
    </div>
  );
}

export default App;
