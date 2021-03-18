const SpaceRow = ({ state, type, number, personID, moment }) => {
    return (
        <div className="t-row">
            <div className="t-text">{state}</div>
            <div className="t-text">{type}</div>
            <div className="t-text">{number}</div>
        </div>
    )
}

export default SpaceRow
