import { useForm } from 'react-hook-form'
import { useMutation, gql } from '@apollo/client'
const createServicio = () => {
    const SERVICIO_QUERY = gql`
        mutation createServicio(
            $anio_mes: LocalDate!
            $nombre_conjunto: String!
            $numero: Int!
            $nombre: String!
            $costo: Int!
        ) {
            createServicio(
                anio_mes: $anio_mes
                nombre_conjunto: $nombre_conjunto
                numero: $numero
                nombre: $nombre
                costo: $costo
            ) {
                payload
            }
        }
    `

    const [createServicio, { loading, error, data }] = useMutation(
        SERVICIO_QUERY
    )

    const { register, handleSubmit } = useForm()
    const estado = 'desocupado'
    const onSubmit = (data) => {
        createServicio({
            variables: {
                anio_mes: data.anio_mes,
                nombre_conjunto: data.nombre_conjunto,
                numero: parseInt(data.numero),
                nombre: data.nombre,
                costo: parseInt(data.costo),
            },
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h2>Información del Edificio a Relacionar con el Servicio</h2>
                <div>
                    <label htmlFor="nombre_conjunto">
                        {' '}
                        Nombre Del Edificio{' '}
                    </label>
                    <input
                        ref={register}
                        name="nombre_conjunto"
                        type="text"
                        id="nombre_conjunto"
                    />
                </div>
                <div>
                    <label htmlFor="numero"> Numero Del Edificio </label>
                    <input
                        ref={register}
                        name="numero"
                        type="number"
                        id="numero"
                    />
                </div>
            </div>
            <div>
                <h2>Información del Servicio</h2>
                <div>
                    <label htmlFor="tipo"> Nombre Servicio </label>
                    <input
                        ref={register}
                        name="nombre"
                        type="text"
                        id="nombre"
                    />
                </div>
                <div>
                    <label htmlFor="anio_mes"> Fecha </label>
                    <input
                        ref={register}
                        name="anio_mes"
                        type="date"
                        id="anio_mes"
                    />
                </div>
                <div>
                    <label htmlFor="costo"> Costo Servicio </label>
                    <input
                        ref={register}
                        name="costo"
                        type="number"
                        id="costo"
                    />
                </div>
            </div>
            {data == undefined ? (
                <div>Intente crear un nuevo Servicio!</div>
            ) : (
                <div>{data.createServicio.payload}</div>
            )}
            <button type="submit"> CREAR NUEVO SERVICIO</button>
        </form>
    )
}
export default createServicio
