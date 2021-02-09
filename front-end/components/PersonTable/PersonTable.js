import React from 'react';
import PersonRow from './PersonRow';

const PersonTable = ({persons}) => {
    const items = persons.map((item) => {
        return (
            <li key={item.id}>
                <PersonRow
                    id={item.id}
                    firstName={item.nombre}
                    lastName={item.apellido}
                    foreigner={item.extranjeria}
                    numberID={item.numero_ci}
                    age={item.edad}
                />
                <button type='button' className='t-btn danger'>Eliminar</button>
            </li>
        )
    })
    return (
        <div className='t-container'>
            <h1>Persona</h1>
            <div className='t-dark'>
                <PersonRow
                    id='ID'
                    firstName='Nombre'
                    lastName='Apellido'
                    foreigner='Extranjería'
                    numberID='Nro. de Cédula'
                    age='Edad'
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

export default PersonTable;