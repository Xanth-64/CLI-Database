import RegisterRow from './RegisterRow';

const RegisterTable = ({registers}) => {
    const items = registers.map((item) => {
        return (
            <li key={item.id}>
                <RegisterRow
                    nombre_visitante={item.nombre_visitante}
                    fecha_hora={item.fecha_hora}
                    ci_visitante={item.ci_visitante}
                />
                <button type='button' className='t-btn danger'>Eliminar</button>
            </li>
        )
    })
    return (
        <div className='t-container'>
            <h1>Registros</h1>
            <div className='t-dark'>
                <RegisterRow
                    nombre_visitante='Nombre del visitante'
                    fecha_hora='Fecha y hora'
                    ci_visitante='C.I. del visitante'
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

export default RegisterTable;