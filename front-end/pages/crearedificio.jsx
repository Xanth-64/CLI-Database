import { useForm } from 'react-hook-form'
import { useMutation, gql } from '@apollo/client'
const crearedificio = () => {
    const createEDF = gql`
        mutation createEdificio($nombre_conjunto: String!, $numero: Int!) {
            createEdificio(nombre_conjunto: $nombre_conjunto, numero: $numero) {
                numero
            }
        }
    `

    const [createEdificio, { loading, error, data }] = useMutation(createEDF)

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        createEdificio({
            variables: {
                nombre_conjunto: data.nombre_conjunto,
                numero: parseInt(data.numero),
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
                <label for="numero"> Numero de Torre</label>
                <input ref={register} name="numero" type="number" id="numero" />
            </div>
            <button type="submit"> CREAR EDIFICIO</button>
            {data == undefined ? (
                <div>Intente crear un Edificio</div>
            ) : (
                <div>Edificio Creado Exitosamente</div>
            )}
        </form>
    )
}
export default crearedificio
