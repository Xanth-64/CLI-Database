import PersonaForm from '../components/PersonaForm/PersonaForm'
import FacturaForm from '../components/FacturaForm'
import BuscarSucesosMixtoForm from '../components/BuscarSucesosMixtoForm'
function createCRUD() {
    return (
        <div>
            <button>Hello</button>
            <article>
                <PersonaForm></PersonaForm>
            </article>
            <article>
                <FacturaForm />
            </article>
            <article>
                <BuscarSucesosMixtoForm />
            </article>
        </div>
    )
}
export default createCRUD
