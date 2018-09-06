import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let client = null

if (!process.browser) {
    global.fetch = fetch
}

const initClient = initialState => {
    return new ApolloClient({
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        link: new HttpLink({
            uri: 'http://localhost:3000/api', // Server URL (must be absolute)
            credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
        }),
        cache: new InMemoryCache().restore(initialState || {})
    })
}

export default initialState => {
    if (!process.browser) {
        return initClient(initialState)
    }

    // Reuse client on the client-side
    if (!client) {
        client = initClient(initialState)
    }

    return client
}