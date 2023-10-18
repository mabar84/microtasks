import React from 'react';

type PropsTypeButton = {
    buttonName?: string
    callBack: () => void
}


export const Button = (props: PropsTypeButton) => {
    console.log('button')

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>
            {props.buttonName}
        </button>
    );
};

