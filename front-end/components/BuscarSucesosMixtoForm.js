import { isInteger } from 'lodash'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const BuscarSucesosMixtoForm = () => {
    const { register, handleSubmit } = useForm()
    const [datos, useDatos] = useState()
    const onSubmit = (data) => {
        console.log(data)
        if (data.numero.isNumeric && isInteger(parseInt(data.numero))) {
            //BUSCAR SI EXISTE UN CONDO CON EL NOMBRE DE data.nombre_conjunto y data.numero
            if (true) {
                //EN CASO DE EXISTIR, REAZLIZAR LA BUSQUEDA
                //LUEGO DE LA FUNCION, DENTRO DEL .THEN() ESCRIBIR LO SIGUIENTE
                //setDatos(datos) //HABILITA LA TABLA
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>BUSCAR SUCESOS POR EDIFICIO Y RANGO DE FECHA</h3>
                <div>
                    <label for="tipo"> Nombre del Conjunto </label>
                    <input ref={register} name="tipo" type="text" id="tipo" />
                </div>
                <div>
                    <label for="numero"> Numero de Torre </label>
                    <input
                        ref={register}
                        name="numero"
                        type="number"
                        id="numero"
                    />
                </div>
                <label for="lowerBound"> Fecha de inicio</label>
                <input
                    ref={register}
                    name="LowerBound"
                    type="date"
                    id="lowerBound"
                />
                <label for="upperBound"> Fecha Final </label>
                <input
                    ref={register}
                    name="upperBound"
                    type="date"
                    id="upperBound"
                />
                <button type="submit"> Buscar Sucesos</button>
            </form>
            {datos &&
                datos.map((dato) => {
                    ;<h1></h1>
                })}
        </div>
    )
}
export default BuscarSucesosMixtoForm
