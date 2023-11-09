import React from 'react';


type NewComponentPropsType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const cars = topCars.map((el, ind) => {
        return (
            <tr key={ind}>
                <td>{ind + 1}.</td>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
            </tr>
        )
    })

    const students = props.students.map((el, ind, arr) => {
        return (
            <li key={el.id}>
                {el.name}, {el.age}
            </li>
        )
    })

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>№</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                {cars}
                </tbody>
            </table>

            <ul>
                {students}
            </ul>
        </>

    );
};