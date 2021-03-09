import { useForm } from 'react-hook-form'
const crearSuceso = () => {
    const { register, handleSubmit } = useForm()
    //ESTADO POR DEFECTO
    const estado = 'desocupado'
    const onSubmit = (data) => {
        if (data.numero.isInteger()) {
            // COMPROBAR QUE EL CONJUNTO EXISTE
            if (true) {
                data.estado = estado
                console.log(data)
                //PONER EL QUERY AQUI
            }
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="nombre_conjunto"> Nombre del conjunto </label>
                <input
                    ref={register}
                    name="nombre_conjunto"
                    type="text"
                    id="titnombre_conjunto"
                />
            </div>
            <div>
                <label for="numero"> numero de Torre </label>
                <input ref={register} name="numero" type="number" id="numero" />
            </div>
            <div>
                <label for="titulo"> titulo </label>
                <input ref={register} name="titulo" type="text" id="titulo" />
            </div>
            <div>
                <label for="descripcion"> Descripcion </label>
                <input
                    ref={register}
                    name="descripcion"
                    type="textarea"
                    id="descripcion"
                />
            </div>
            <div>
                <label for="estado"> Estado </label>
                <input
                    ref={register}
                    name="estado"
                    type="text"
                    id="estado"
                    placeholder="michigan"
                    disabled={true}
                />
            </div>
            <button type="submit"> REGISTRAR SUCESO</button>
        </form>
    )
}
export default crearSuceso
