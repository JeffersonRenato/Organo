import './Banner.css'

export const Banner = (props) => {
    return (
        <header className="banner">
            <img src={props.src} alt={props.alt} />
        </header>
    )
}