import React from 'react';
import SpaceRow from './SpaceRow';

const SpaceTable = ({spaces}) => {
    const items = spaces.map((item) => {
        return (
            <li key={item.id}>
                <SpaceRow
                    id={item.id}
                    state={item.estado}
                    type={item.tipo}
                    number={item.numero}
                    personID={item.personaID}
                    moment={item.momento}
                />
                <button type='button' className='t-btn danger'>Eliminar</button>
            </li>
        )
    })
    return (
        <div className='t-container'>
            <h1>Área común</h1>
            <div className='t-dark'>
                <SpaceRow
                    id='ID'
                    state='Estado'
                    type='Tipo'
                    number='Número'
                    personID='ID_Persona'
                    moment='Momento'
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

export default SpaceTable;