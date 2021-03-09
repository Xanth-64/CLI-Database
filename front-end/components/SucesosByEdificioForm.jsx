import { useForm } from 'react-hook-form'
export const SucesosByEdificioForm = () => {
    const { register, handleSubmit } = useForm()
    const [datos, setDatos] = useState(false)
    const onSubmit = (data) => {
        if (data.numero.isInteger()) {
            //BUSCAR SI EXISTE UN CONDO CON EL NOMBRE DE data.nombre_conjunto y data.numero
            if (true) {
                //EN CASO DE EXISTIR, REAZLIZAR LA BUSQUEDA
                //LUEGO DE LA FUNCION, DENTRO DEL .THEN() ESCRIBIR LO SIGUIENTE
                // setDatos(datos) //HABILITA LA TABLA
            }
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>BUSCAR SUCESOS POR EDIFICIO</h3>
            <div>
                <label for="tipo"> Nombre del Conjunto </label>
                <input ref={register} name="tipo" type="text" id="tipo" />
            </div>
            <div>
                <label for="numero">Numero de Torre </label>
                <input ref={register} name="numero" type="text" id="numero" />
            </div>
            <button type="submit"> Buscar Sucesos</button>
            {datos &&
                datos.map((dato) => {
                    ;<h1></h1>
                })}
        </form>
    )
}
