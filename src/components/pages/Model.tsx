import {adidasArr} from "./AdidasArr";
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()
    let goodData = adidasArr.find(el => el.id === params.id)
    return (
        goodData
            ? <>
                <h2>Model {goodData.model} </h2>
                <img src={goodData.picture} alt={goodData.model}/>
                <p>Collection: {goodData.collection}</p>
                <p>Price: {goodData.price}</p>
            </>
            : <h2>Модель ещё не сшили</h2>)
}