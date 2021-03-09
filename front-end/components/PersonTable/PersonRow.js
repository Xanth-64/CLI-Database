const PersonRow = ({firstName, lastName, foreigner, numberID, age}) => {
    return (
        <div className='t-row'>
            <div className='t-text'>{firstName}</div>
            <div className='t-text'>{lastName}</div>
            <div className='t-text'>{foreigner}</div>
            <div className='t-text'>{numberID}</div>
            <div className='t-text'>{age}</div>
        </div>
    )
}

export default PersonRow;