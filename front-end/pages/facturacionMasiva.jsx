import { useForm } from 'react-hook-form'
const facturacionMaxiva = () => {
    const { register, handleSubmit } = useForm()
    const estado = 'desocupado'
    const onSubmit = (data) => {
        console.log(data)
        //PONER EL QUERY AQUI
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="nombre_conjunto"> Nombre del Conjunto </label>
                <input
                    ref={register}
                    name="nombre_conjunto"
                    type="text"
                    id="nombre_conjunto"
                />
            </div>
            <div>
                <label for="numero"> Numero de la torre </label>
                <input ref={register} name="numero" type="text" id="numero" />
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
            <button type="submit"> REALIZAR FACTURACION MASIVA </button>
        </form>
    )
}
export default facturacionMaxiva
