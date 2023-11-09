type FooterTitle = {
    titleForFooter: string
}

export const Footer = (props: FooterTitle) => {
    return (
        <>
            <h1>
                {props.titleForFooter}
            </h1>
        </>)
}