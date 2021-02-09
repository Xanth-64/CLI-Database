import '../styles/globals.css'
import '../styles/formStyles.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
function MyApp({ Component, pageProps }) {
    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
        cache: new InMemoryCache(),
    })
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
