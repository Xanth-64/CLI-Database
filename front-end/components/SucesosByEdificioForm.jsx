import { useForm } from 'react-hook-form'
export const SucesosByEdificioForm = () => {
    const { register, handleSubmit } = useForm()
    const [hayDatos, setHayDatos] = useState(false)
    const onSubmit = (data) => {
        if (data.numero.isInteger()) {
            //BUSCAR SI EXISTE UN CONDO CON EL NOMBRE DE data.nombre_conjunto y data.numero
            if (true) {
                //EN CASO DE EXISTIR, REAZLIZAR LA BUSQUEDA

                //LUEGO DE LA FUNCION, DENTRO DEL .THEN() ESCRIBIR LO SIGUIENTE
                setHayDatos(true) //HABILITA LA TABLA
            }
        }
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
            <button type="submit"> Buscar Sucesos</button>
            {hayDatos && <div> PONER LA TABLA AQUÍ</div>}
        </form>
    )
}
