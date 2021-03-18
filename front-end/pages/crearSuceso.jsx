import { useForm } from 'react-hook-form'
import { useMutation, gql } from '@apollo/client'
const crearSuceso = () => {
    const createSuceso = gql`
        mutation createSuceso(
            $descripcion: String!
            $titulo: String!
            $fecha: LocalDate!
            $nombre_conjunto: String!
            $numero: Int!
        ) {
            createSuceso(
                descripcion: $descripcion
                titulo: $titulo
                fecha: $fecha
                nombre_conjunto: $nombre_conjunto
                numero: $numero
            ) {
                payload
            }
        }
    `

    const [createSucesoFunc, { loading, error, data }] = useMutation(
        createSuceso
    )

    const { register, handleSubmit } = useForm()
    //ESTADO POR DEFECTO
    const estado = 'desocupado'
    const onSubmit = (data) => {
        createSucesoFunc({
            variables: {
                descripcion: data.descripcion,
                titulo: data.titulo,
                fecha: data.anio_mes,
                nombre_conjunto: data.nombre_conjunto,
                numero: parseInt(data.numero),
            },
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label for="nombre_conjunto"> Nombre del Edificio </label>
                <input
                    ref={register}
                    name="nombre_conjunto"
                    type="text"
                    id="nombre_conjunto"
                />
            </div>
            <div>
                <label htmlFor="numero"> Numero de Torre </label>
                <input ref={register} name="numero" type="number" id="numero" />
            </div>
            <div>
                <label htmlFor="titulo"> Titulo Suceso </label>
                <input ref={register} name="titulo" type="text" id="titulo" />
            </div>
            <div>
                <label htmlFor="descripcion"> Descripcion </label>
                <input
                    ref={register}
                    name="descripcion"
                    type="textarea"
                    id="descripcion"
                />
            </div>
            <div>
                <label htmlFor="anio_mes"> Fecha del Suceso </label>
                <input
                    ref={register}
                    name="anio_mes"
                    type="date"
                    id="anio_mes"
                />
            </div>
            {data == undefined ? (
                <div>Introduzca el Suceso a Registrar</div>
            ) : (
                <div>{data.createSuceso.payload}</div>
            )}
            <button type="submit"> REGISTRAR SUCESO</button>
        </form>
    )
}
export default crearSuceso
