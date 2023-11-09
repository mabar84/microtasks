type BodyTitle = {
    titleForBody: string
}

export const Body = (props: BodyTitle) => {
    return (
        <>
            <h1>
                {props.titleForBody}
            </h1>
        </>)
}