import { useForm } from 'react-hook-form'
import { useLazyQuery, gql } from '@apollo/client'
import SucesosInformation from '../components/SucesosInformation'
import BuscarSucesosMixtoForm from '../components/BuscarSucesosMixtoForm'
function paginaConsultaSuceso() {
    const { register, handleSubmit } = useForm()
    const GetSucesos = gql`
        query getSucesos($LowerBound: LocalDate!, $UpperBound: LocalDate!) {
            getSucesoByDateRange(
                LowerBound: $LowerBound
                UpperBound: $UpperBound
            ) {
                descripcion
                titulo
                fecha
            }
        }
    `
    const [getSucesos, { loading, error, data }] = useLazyQuery(GetSucesos)
    const onSubmit = (data) => {
        getSucesos({
            variables: {
                LowerBound: data.fecha_inferior,
                UpperBound: data.fecha_superior,
            },
        })
    }
    if (loading || error) {
        return <div>Cargando</div>
    }
    return (
        <div>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Limite Inferior para las Busquedas de los sucesos</h3>

                    <input
                        ref={register}
                        name="fecha_inferior"
                        type="date"
                        id="fecha_inferior"
                    />

                    <h3>Limite Superior para las Busquedas de los sucesos</h3>

                    <input
                        ref={register}
                        name="fecha_superior"
                        type="date"
                        id="fecha_superior"
                    />

                    <input
                        type="submit"
                        value="Aceptar"
                        className="form-button"
                    />
                </form>
                <SucesosInformation Information={data}></SucesosInformation>
            </section>

            <section>
                <BuscarSucesosMixtoForm />
            </section>
        </div>
    )
}
export default paginaConsultaSuceso
