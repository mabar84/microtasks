import React, {ChangeEvent, useState} from 'react';

// type FullInputPropsType = {
//     messages: MessageType[]
//     setMessages: (m: MessageType[]) => void
// }
// type MessageType = {
//     message: string
// }

type FullInputPropsType = (
    {
        addMessage: (text: string) => void
    }
    )

export const FullInput = (props: FullInputPropsType) => {
    const [text, setText] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(text)
        setText('')
    }
    // const onClickButtonHandler = () => {
    //     setMessages([...messages, {message: text}],)
    //     setText('')
    // }
    return (
        <div>
            <input onChange={onChangeInputHandler} type="text" value={text}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};