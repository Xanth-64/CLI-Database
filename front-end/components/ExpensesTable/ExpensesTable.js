import ExpensesRow from './ExpensesRow';

const ExpensesTable = ({expenses}) => {
    const items = expenses.map((item) => {
        return (
            <li key={item.id}>
                <ExpensesRow
                    nombre={item.nombre}
                    anio_mes={item.anio_mes}
                    costo={item.costo}
                    Monto_A_Pagar={item.Monto_A_Pagar}
                />
                <button type='button' className='t-btn danger'>Eliminar</button>
            </li>
        )
    })
    return (
        <div className='t-container'>
            <h1>Gastos extra</h1>
            <div className='t-dark'>
            <ExpensesRow
                nombre='Nombre'
                anio_mes='Mes y año'
                costo='Costo total'
                Monto_A_Pagar='Monto a pagar'
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

export default ExpensesTable;