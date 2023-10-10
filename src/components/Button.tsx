import React from 'react';

type PropsTypeButton = {
    buttonName?: string
    callBack: () => void
}


export const Button = (props: PropsTypeButton) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>
            {props.buttonName}
        </button>
    );
};

