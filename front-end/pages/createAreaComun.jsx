import { useForm } from 'react-hook-form'
import { useMutation, gql } from '@apollo/client'
const createAreaComun = () => {
    const GetSucesos = gql`
        mutation createArea($tipo: String!, $numero: Int!) {
            createAreaComun(tipo: $tipo, numero: $numero) {
                tipo
                numero
            }
        }
    `
    const { register, handleSubmit } = useForm()
    const [createArea, { loading, error, data }] = useMutation(GetSucesos)
    const estado = 'Desocupado'
    const onSubmit = (datos) => {
        console.log(datos)
        createArea({
            variables: { tipo: datos.tipo, numero: parseInt(datos.numero) },
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="tipo"> Nombre del Area Comun </label>
                    <input ref={register} name="tipo" type="text" id="tipo" />
                </div>
                <div>
                    <label htmlFor="numero"> Numero del Area Comun</label>
                    <input
                        ref={register}
                        name="numero"
                        type="number"
                        min="0"
                        id="numero"
                    />
                </div>
                <button type="submit"> CREAR AREA COMUN</button>
            </form>
            {data == undefined || error != undefined ? (
                <div>No ha Enviado Informacion </div>
            ) : (
                <div>Informacion Enviada Exitosamente</div>
            )}
        </div>
    )
}
export default createAreaComun
