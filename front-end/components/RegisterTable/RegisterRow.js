const RegisterRow = ({nombre_visitante, fecha_hora, ci_visitante}) => {
    return (
        <div className='t-row'>
            <div className='t-text'>{nombre_visitante}</div>
            <div className='t-text'>{fecha_hora}</div>
            <div className='t-text'>{ci_visitante}</div>
        </div>
    )
}

export default RegisterRow;