type NewComponentType = {
    students: Array<StudentType>
    topCars: Array<topCars>
    // students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number,
}
type topCars = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                {
                    props.topCars.map((car: topCars, index: number) => (
                        <tr key={index}>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {
                props.students.map((student: StudentType, index: number) => (
                    <h2 key={student.id}>
                        №{index + 1} {student.name}, age: {student.age}
                    </h2>
                ))
            }
        </>)
}