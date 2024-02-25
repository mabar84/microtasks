import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='adidas' element={<PageOne/>}/>
                        <Route path='puma' element={<PageTwo/>}/>
                        <Route path='abibas' element={<PageThree/>}/>
                        <Route path='404' element={<Error404/>}/>
                        <Route path='*' element={<Navigate to='404'/>}/>
                        <Route path='' element={<Navigate to='puma'/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
