import React from "react";
import {FilterType} from "../App";

export type CurrencyType = {
    banknote: string
    nominal: number
    number: string
}

type CurencyPropsType = {
    currentMoney: Array<CurrencyType>
    onClickFilterHandler: (value: FilterType) => void
}

export const Curency=(props:CurencyPropsType)=>{

    return (
        <>
            <ul>
                {props.currentMoney.map((arr, index) => {
                        return (
                            <li key={index}>
                                <span>{arr.banknote}</span>
                                <span>{arr.nominal}</span>
                                <span>{arr.number}</span>
                            </li>
                        )
                    }
                )
                }

            </ul>
            <div style={{marginLeft: "135px"}}>
                <button onClick={() => props.onClickFilterHandler("dollar")}>dollar</button>
                <button onClick={() => props.onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={() => props.onClickFilterHandler("all")}>all</button>
            </div>
        </>
    )
}