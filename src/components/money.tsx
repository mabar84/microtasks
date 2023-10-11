import React, {useState} from 'react';
import {Button} from "./Button";

type moneyPropsType = {
    money: Array<{
        banknots: string,
        value: number,
        number: string
    }>
}

export const Money = (props: moneyPropsType) => {
    let money = props.money

    const [filter, setFilter] = useState<'all' | 'ruble' | 'dollar'>('all')

    const sendFilterName = (filter: 'all' | 'ruble' | 'dollar') => {
        setFilter(filter)
    }

    let filteredMoney = money
    if (filter === 'ruble') {
        filteredMoney = money.filter((el) => el.banknots === 'RUBLS')
    }
    if (filter === 'dollar') {
        filteredMoney = money.filter(el => el.banknots === 'Dollars')
    }


    const moneyFromMap = filteredMoney.map((el, ind) => {
        return (
            <li key={ind}>
                {el.banknots} {el.value} {el.number}
            </li>
        )
    })


    return (
        <div>
            <ul>
                {moneyFromMap}
            </ul>
            <div>
                <Button callBack={() => sendFilterName('all')} buttonName={'all'}/>
                <Button callBack={() => sendFilterName('ruble')} buttonName={'rub'}/>
                <Button callBack={() => sendFilterName('dollar')} buttonName={'$'}/>
            </div>
        </div>
    );
};