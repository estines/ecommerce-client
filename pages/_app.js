import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../components/withApollo'

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps, client } = this.props
        return (
            <Container>
                <ApolloProvider client={client}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        )
    }
}

export default withApollo(MyApp)