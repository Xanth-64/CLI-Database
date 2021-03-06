import React from 'react';

const BuildingRow = ({name, number}) => {
    return (
        <div className='t-row'>
            <div className='t-text'>{name}</div>
            <div className='t-text'>{number}</div>
        </div>
    )
}

export default BuildingRow;