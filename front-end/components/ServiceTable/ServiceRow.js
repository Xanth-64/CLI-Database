const ServiceRow = ({nombre, anio_mes, costo, Monto_A_Pagar}) => {
    return (
        <div className='t-row'>
            <div className='t-text'>{nombre}</div>
            <div className='t-text'>{anio_mes}</div>
            <div className='t-text'>{costo}</div>
            <div className='t-text'>{Monto_A_Pagar}</div>
        </div>
    )
}

export default ServiceRow;