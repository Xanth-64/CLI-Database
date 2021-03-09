import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock,
    ButtonToolbar,
} from 'rsuite'
import { useForm } from 'react-hook-form'

const FacturaForm = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data) //CAMBIAR
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Información del edificio</h3>

            <label htmlFor="nombre_edificio">Nombre del edificio:</label>
            <input
                ref={register}
                name="nombre_edificio"
                type="text"
                id="nombre_edificio"
            />

            <label htmlFor="numero_edificio">Número del edificio:</label>
            <input
                ref={register}
                name="numero_edificio"
                type="number"
                id="numero_edificio"
            />

            <h3>Información del apartamento</h3>

            <label htmlFor="nombre_apto">Nombre del apartamento:</label>
            <input
                ref={register}
                name="nombre_apto"
                type="text"
                id="nombre_apto"
            />

            <label htmlFor="numero_apto">Número del apartamento:</label>
            <input
                ref={register}
                name="numero_apto"
                type="number"
                id="numero_apto"
            />

            <h3>Fecha de la factura</h3>

            <input ref={register} name="fecha" type="date" id="fecha" />

            <input type="submit" value="Aceptar" className="form-button" />
        </form>
    )
    /* return(
        <Form>
            <h3>Información del edificio</h3>
            <FormGroup>
                <ControlLabel>Nombre del edificio</ControlLabel>
                <FormControl name='nombre_edificio' />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Número del edificio</ControlLabel>
                <FormControl name='numero_edificio' type='number' />
            </FormGroup>
            <br></br>
            <h3>Información del apartamento</h3>
            <FormGroup>
                <ControlLabel>Letra del apartamento</ControlLabel>
                <FormControl name='nombre_edificio' />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Número del apartamento</ControlLabel>
                <FormControl name='numero_edificio' type='number' />
            </FormGroup>
            <br></br>
            <FormGroup>
                <ControlLabel>Fecha de la factura</ControlLabel>
                <FormControl name='fecha' type='date' />
            </FormGroup>
            <ButtonToolbar>
                <Button appearance='primary'>Enviar</Button>
            </ButtonToolbar>
        </Form>
    ) */
}

export default FacturaForm
