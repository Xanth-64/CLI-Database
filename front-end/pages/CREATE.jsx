import PersonaForm from '../components/PersonaForm/PersonaForm'
import FacturaForm from '../components/FacturaForm'
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite'
function createCRUD() {
    return (
        <div>
            <Button>Hello</Button>
            <article>
                <PersonaForm></PersonaForm>
            </article>
            <FacturaForm></FacturaForm>
            <article></article>
            <article></article>
        </div>
    )
}
export default createCRUD
