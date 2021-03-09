import PersonaForm from '../components/PersonaForm/PersonaForm'
import FacturaForm from '../components/FacturaForm'
function createCRUD() {
    return (
        <div>
            <article>
                <PersonaForm></PersonaForm>
            </article>
            <article>
                <FacturaForm />
            </article>
            <article></article>
        </div>
    )
}
export default createCRUD
