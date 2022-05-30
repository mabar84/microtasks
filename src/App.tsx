import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";


function App() {
    return (
        <>
            <div className="App">
                <Header text={"logo"}/>
                <Body titleForBody={"content"}/>
                <Footer titleForFooter={"contacts"}/>
            </div>
        </>
    );
}

export default App;
