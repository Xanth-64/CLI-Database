import { amyApp } from './_app'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PersonaForm } from '../components/PersonaForm'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { gql } from '@apollo/client'

export default function Home() {
    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
        cache: new InMemoryCache(),
    })

    return (
        <>
            <ApolloProvider client={client}>
                <myApp>
                    <PersonaForm />
                </myApp>
            </ApolloProvider>
        </>
    )
}
