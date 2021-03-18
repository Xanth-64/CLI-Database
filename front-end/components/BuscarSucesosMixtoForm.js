import { isInteger } from 'lodash'
import { useLazyQuery, gql } from '@apollo/client'
import { useForm } from 'react-hook-form'
import SucesosInformation from '../components/SucesosInformation'
const BuscarSucesosMixtoForm = () => {
    const { register, handleSubmit } = useForm()
    const GetSucesos = gql`
        query getSucesoByDateRangeAndEdificioIdentifie(
            $LowerBound: LocalDate!
            $UpperBound: LocalDate!
            $nombre_conjunto: String!
            $numero: Int!
        ) {
            getSucesoByDateRangeAndEdificioIdentifier(
                LowerBound: $LowerBound
                UpperBound: $UpperBound
                nombre_conjunto: $nombre_conjunto
                numero: $numero
            ) {
                descripcion
                titulo
                fecha
            }
        }
    `
    const [getSucesos, { loading, error, data }] = useLazyQuery(GetSucesos)
    const onSubmit = (datos) => {
        console.log(datos)
        getSucesos({
            variables: {
                LowerBound: datos.lowerBound,
                UpperBound: datos.upperBound,
                nombre_conjunto: datos.nombre_conjunto,
                numero: parseInt(datos.numero),
            },
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>BUSCAR SUCESOS POR EDIFICIO Y RANGO DE FECHA</h3>
                <div>
                    <label htmlFor="nombre_conjunto">
                        {' '}
                        Nombre del Conjunto{' '}
                    </label>
                    <input
                        ref={register}
                        name="nombre_conjunto"
                        type="text"
                        id="nombre_conjunto"
                    />
                </div>
                <div>
                    <label htmlFor="numero"> Numero de Torre </label>
                    <input
                        ref={register}
                        name="numero"
                        type="number"
                        id="numero"
                    />
                </div>
                <label htmlFor="lowerBound"> Fecha de inicio</label>
                <input
                    ref={register}
                    name="lowerBound"
                    type="date"
                    id="lowerBound"
                />
                <label htmlFor="upperBound"> Fecha Final </label>
                <input
                    ref={register}
                    name="upperBound"
                    type="date"
                    id="upperBound"
                />
                <button type="submit"> Buscar Sucesos</button>
            </form>
            <SucesosInformation Information={data}></SucesosInformation>
        </div>
    )
}
export default BuscarSucesosMixtoForm
