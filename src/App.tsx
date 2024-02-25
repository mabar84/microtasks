import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";

const PATH = {
    ADIDAS: 'adidas',
    PUMA: 'puma',
    ABIBAS: 'abibas',
    ERROR404: 'page/error404'
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavLink className={({isActive}) => isActive ? styles.active : ""}
                             to={PATH.ADIDAS}>{PATH.ADIDAS}</NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.active : ""}
                             to={PATH.PUMA}>{PATH.PUMA}</NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.active : ""}
                             to={PATH.ABIBAS}>{PATH.ABIBAS}</NavLink>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={PATH.ADIDAS} element={<PageOne/>}/>
                        <Route path={PATH.PUMA} element={<PageTwo/>}/>
                        <Route path={PATH.ABIBAS} element={<PageThree/>}/>

                        {/*<Route path={PATH.ERROR404} element={<Error404/>}/>*/}
                        {/*<Route path='*' element={<Navigate to='page/error404'/>}/>*/}
                        
                        <Route path={'*'} element={<Error404/>}/>


                        <Route path='' element={<Navigate to={PATH.PUMA}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
