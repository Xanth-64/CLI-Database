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
export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: ALL_POSTS_QUERY,
        variables: allPostsQueryVars,
    })

    return addApolloState(apolloClient, {
        props: {},
        revalidate: 1,
    })
}
