type HeaderText={
    text: string
}

export const Header = (props: HeaderText) => {
    return (
        <>
            <h1>
                {props.text}
            </h1>
        </>)
}