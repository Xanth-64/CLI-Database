import React from 'react';
import BuildingRow from './BuildingRow';

const BuildingTable = ({buildings}) => {
    const items = buildings.map((item) => {
        return (
            <li key={item.id}>
                <BuildingRow
                    id={item.id}
                    name={item.nombre_conjunto}
                    number={item.numero}
                />
            </li>
        )
    })
    return (
        <div className='t-container'>
            <h1>Edificio</h1>
            <div className='t-dark'>
                <BuildingRow
                    id='ID'
                    name='Nombre'
                    number='Número'
                />
            </div>
            <div className='t-list'>
                <ul>
                    {items}
                </ul>
            </div>
        </div>
    )
}

export default BuildingTable;