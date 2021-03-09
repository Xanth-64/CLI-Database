import { useForm } from 'react-hook-form'
const crearedificio = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        if (data.numero.isInteger()) {
            data.numero = parseInt(data.numero)
            console.log(data)
            //PONER EL QUERY AQUI
        }
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
                <label for="numero"> Numero de Torre</label>
                <input ref={register} name="numero" type="number" id="numero" />
            </div>
            <button type="submit"> CREAR EDIFICIO</button>
        </form>
    )
}
export default crearedificio
