import '../styles/globals.css'
import '../styles/formStyles.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
