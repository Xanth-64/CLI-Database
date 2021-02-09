import { amyApp } from './_app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PersonaForm } from '../components/PersonaForm'
import { initializeApollo, addApolloState } from '../lib/apolloClient'
export default function Home() {
    return (
        <>
            <myApp>
                <PersonaForm />
            </myApp>
        </>
    )
}
