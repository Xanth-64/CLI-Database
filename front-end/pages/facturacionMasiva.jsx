import { useForm } from 'react-hook-form'
import { useMutation, gql } from '@apollo/client'
const facturacion = () => {
    const facturacionMasiva = gql`
        mutation facturacionMasiva(
            $anio_mes: LocalDate!
            $nombre_conjunto: String!
            $numero: Int!
        ) {
            facturacionMasiva(
                anio_mes: $anio_mes
                nombre_conjunto: $nombre_conjunto
                numero: $numero
            ) {
                payload
            }
        }
    `
    const { register, handleSubmit } = useForm()
    const [makeFacturacion, { loading, error, data }] = useMutation(
        facturacionMasiva
    )
    const estado = 'desocupado'
    const onSubmit = (data) => {
        makeFacturacion({
            variables: {
                anio_mes: data.anio_mes,
                numero: parseInt(data.numero),
                nombre_conjunto: data.nombre_conjunto,
            },
        })
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
                <input ref={register} name="numero" type="number" id="numero" />
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
            {data == undefined ? (
                <div>Realice la facturación de su Edificio</div>
            ) : (
                <div>{data.facturacionMasiva.payload}</div>
            )}
        </form>
    )
}
export default facturacion
