import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./components/Button";
import {Curency, CurrencyType} from "./components/Curency";

export type FilterType = "all" | "ruble" | "dollar";

function App() {

    const [money, setMoney] = useState<Array<CurrencyType>>([
        {banknote: "dollar", nominal: 100, number: "a1234567890"},
        {banknote: "dollar", nominal: 50, number: "z1234567890"},
        {banknote: "ruble", nominal: 100, number: "w1234567890"},
        {banknote: "dollar", nominal: 100, number: "e1234567890"},
        {banknote: "dollar", nominal: 50, number: "c1234567890"},
        {banknote: "ruble", nominal: 100, number: "r1234567890"},
        {banknote: "dollar", nominal: 50, number: "x1234567890"},
        {banknote: "ruble", nominal: 50, number: "v1234567890"},
    ])

    const [nameButton, setNameButton] = useState<FilterType>("all")

    let currentMoney = money;

    if (nameButton === "ruble") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "ruble")
    }
    if (nameButton === "dollar") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "dollar")
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setNameButton(nameButton)
    }

    return (
<Curency onClickFilterHandler={onClickFilterHandler}
         currentMoney={currentMoney}
/>

    );
}

export default App;
