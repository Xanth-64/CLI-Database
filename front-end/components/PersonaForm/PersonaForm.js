import { useForm } from 'react-hook-form'
import { useMutation, gql } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'
const CREATE_PERSONA_MUTATION = gql`
    mutation createPersona(
        $nombre: String!
        $apellido: String!
        $extranjeria: String!
        $numero_ci: Int!
        $edad: Int!
    ) {
        createPersona(
            nombre: $nombre
            apellido: $apellido
            extranjeria: $extranjeria
            numero_ci: $numero_ci
            edad: $edad
        ) {
            nombre
            apellido
            extranjeria
            numero_ci
            edad
        }
    }
`
const PersonaForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        if (
            data.nombre.toString().length > 20 ||
            data.apellido.toString().length > 20
        ) {
            console.log('mayor a 20')
        } else if (data.edad < 0) {
            console.log('edad neg')
        } else {
            console.log(
                'name: ',
                data.nombre,
                'Apellidp: ',
                data.apellido,
                'Edad: ',
                data.edad,
                'nacionalidad: ',
                origin,
                'Ci: ',
                data.numero_ci
            )
            const formdata = {
                nombre: data.nombre,
                apellido: data.apellido,
                edad: parseInt(data.edad),
                extranjeria: data.extranjeria,
                ci: parseInt(data.numero_ci),
            }
            console.log(formdata)
            await createPersona({
                variables: {
                    nombre: formdata.nombre,
                    apellido: formdata.apellido,
                    edad: formdata.edad,
                    extranjeria: formdata.extranjeria,
                    numero_ci: formdata.ci,
                },
            }).catch((err) => {
                console.log('caimos aqui')
                console.log(err)
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3> CREAR PERSONA</h3>
            <div>
                <label for="nombre"> Primer Nombre </label>
                <input ref={register} name="nombre" type="text" id="nombre" />
            </div>
            <div>
                <label for="apellido"> Primer Apellido </label>
                <input
                    ref={register}
                    name="apellido"
                    type="text"
                    id="apellido"
                />
            </div>
            <div>
                <label for="edad"> Edad </label>
                <input ref={register} name="edad" type="number" id="edad" />
            </div>
            <div>
                <label for="numero_ci"> Numero de Cédula </label>
                <input
                    ref={register}
                    name="numero_ci"
                    type="number"
                    id="numero_ci"
                />
            </div>
            <select name="extranjeria" ref={register}>
                <option value="V"> Venezolano</option>
                <option value="E"> Extranjero</option>
            </select>
            <button type="submit"> REGISTRAR PERSONA</button>
        </form>
    )
}
export default PersonaForm
