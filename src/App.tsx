import React, {MouseEvent} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./components/Button";


function App() {
    //
    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]
    //
    // const topCars = [
    //     {manufacturer: "BMW", model: 'm5cs'},
    //     {manufacturer: "Mercedes", model: 'e63s'},
    //     {manufacturer: "Audi", model: 'rs6'}
    // ]

    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello Im VASKA")
    // }
    //
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) =>  {
    //      console.log("Hello Im IVAN")
    //  }


    const onClickHandler = (name: string) => {
        console.log("Hello! I'm ", name)
    }

    const foo1 = () => {
        console.log("Пусто")
    }
    const foo2 = (n: number) => {
        console.log(n)
    }

    const Button1foo = (subscriber: string, age: number) => {
        console.log(subscriber, " age ", age)
    }
    const Button2foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3foo = () => {
        console.log("Im stupid button")
    }

    return (
        <>
            {/*<button onClick={  ()=> onClickHandler("PETR")  }>MyYoutubeChanel-1</button>*/}
            {/*<button onClick={ ()=> onClickHandler("IVAN") }>MyYoutubeChanel-2</button>*/}
            <Button name={"MyYoutubeChanel-1"} callBack={() => Button1foo("Vasia", 21)}/>
            <Button name={"MyYoutubeChanel-2"} callBack={() => Button2foo("Petr")}/>
            <Button name={"StupidButton"} callBack={Button3foo}/>

            {/*<Header text={"logo"}/>*/}
            {/*<NewComponent students={students} topCars={topCars}/>*/}
            {/*<Body titleForBody={"content"}/>*/}
            {/*<Footer titleForFooter={"contacts"}/>*/}
        </>
    );
}

export default App;
