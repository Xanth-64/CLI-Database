import { useForm } from 'react-hook-form'
export default createAreaComun = () => {
    const { register, handleSubmit } = useForm()
    const estado = 'desocupado'
    const onSubmit = (data) => {
        console.log(data)
        //PONER EL QUERY AQUI
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="tipo"> Nombre del Conjunto </label>
                <input ref={register} name="tipo" type="text" id="tipo" />
            </div>
            <div>
                <label for="numero"> </label>
                <input ref={register} name="numero" type="text" id="numero" />
            </div>
            <button type="submit"> CREAR AREA COMUN</button>
        </form>
    )
}
