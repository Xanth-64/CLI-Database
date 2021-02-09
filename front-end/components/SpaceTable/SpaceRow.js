import React from 'react';

const SpaceRow = ({id, state, type, number, personID, moment}) => {
    return (
        <div className='t-row'>
            <div className='t-text'>{id}</div>
            <div className='t-text'>{state}</div>
            <div className='t-text'>{type}</div>
            <div className='t-text'>{number}</div>
            <div className='t-text'>{personID}</div>
            <div className='t-text'>{moment}</div>
        </div>
    )
}

export default SpaceRow;