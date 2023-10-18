import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string
    setText: (text: string) => void
}

export const Input = ({value, setText}: InputPropsType) => {
    console.log('input')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }

    return (
        <input onChange={onChangeInputHandler} value={value} type={'text'}/>
    );
};

