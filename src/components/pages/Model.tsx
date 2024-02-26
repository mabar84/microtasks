import {useParams} from "react-router-dom";
import {ShoesItem} from "../../App";
import s from './Model.module.css'
import React from "react";

type Props = {
    shoesItems?: ShoesItem[]
}
export const Model = ({shoesItems}: Props) => {
    const params = useParams()
    let goodData = shoesItems?.find(el => el.id === params.id)
    return (
        goodData
            ? <>
                <h2>Model {goodData.model} </h2>
                <img className={s.img} src={goodData.picture} alt={goodData.model}/>
                <p>Collection: {goodData.collection}</p>
                <p>Price: {goodData.price}</p>
            </>
            : <h2>Модель ещё не сшили</h2>
        // : <Navigate to='page/error404'/>
        // : <Error404/>
    )
}