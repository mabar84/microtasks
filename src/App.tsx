import React from 'react';
import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {Model} from "./components/pages/Model";
import adidasModel1 from "./assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import adidasModel2 from "./assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import adidasModel3
    from "./assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";
import pumaModel1 from './assets/red.webp'
import pumaModel2 from './assets/black.webp'
import pumaModel3 from './assets/pink.webp'
import pumaModel4 from './assets/white.webp'
import pumaModel5 from './assets/yellow.webp'
import {Shoes} from "./components/pages/Shoes";

const PATH = {
    ADIDAS: 'adidas',
    PUMA: 'puma',
    ABIBAS: 'abibas',
    ERROR404: 'page/error404'
} as const
export type ShoesItem = {
    id: string
    model: string
    collection: string
    price: string
    picture: string
}
export const adidasArr: ShoesItem[] = [
    {
        id: '0',
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,
    },
    {
        id: '1',
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: '2',
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]
export const pumaArr: ShoesItem[] = [
    {
        id: '0',
        model: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaModel1,
    },
    {
        id: '1',
        model: 'PUMA ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id: '2',
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '28$',
        picture: pumaModel3
    },
    {
        id: '3',
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '32$',
        picture: pumaModel4
    },
    {
        id: '4',
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '34$',
        picture: pumaModel5
    }
]

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
                        <Route path={PATH.ADIDAS} element={<Shoes brand={'Adidas'} shoesItems={adidasArr}/>}/>
                        <Route path={PATH.PUMA} element={<Shoes brand={'Puma'} shoesItems={pumaArr}/>}/>
                        <Route path={PATH.ABIBAS} element={<Shoes brand={'Abibas'}/>}/>


                        <Route path={`${PATH.ADIDAS}/:id`} element={<Model shoesItems={adidasArr}/>}/>
                        <Route path={`${PATH.PUMA}/:id`} element={<Model shoesItems={pumaArr}/>}/>
                        <Route path={`${PATH.ABIBAS}/:id`} element={<Model/>}/>


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
