const Card = ({burger}) => {

    return (
        <div className="card">
            <h2>{burger.name}</h2>
            <p>{burger.description}</p>
            <p>{burger.location.address}</p>
            <p>{burger.location.web}</p>
            {burger.visited && <div className="visited"></div>}
            {!burger.visited && <div className="not-visited"></div>}
        </div>
    )
}

export default Card