import { useForm } from 'react-hook-form'
const createServicio = () => {
    const { register, handleSubmit } = useForm()
    const estado = 'desocupado'
    const onSubmit = (data) => {
        if (data.costo.isInteger()) {
            data.costo = parseInt(costo)
            console.log(data)
            //PONER EL QUERY AQUI
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="tipo"> Nombre Servicio </label>
                <input ref={register} name="nombre" type="text" id="nombre" />
            </div>
            <div>
                <label for="anio_mes"> Fecha </label>
                <input
                    ref={register}
                    name="anio_mes"
                    type="date"
                    id="anio_mes"
                />
            </div>
            <div>
                <label for="costo"> Nombre Servicio </label>
                <input ref={register} name="costo" type="number" id="costo" />
            </div>
            <button type="submit"> CREAR NUEVO SERVICIO</button>
        </form>
    )
}
export default createServicio
