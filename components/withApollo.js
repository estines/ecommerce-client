import React from 'react'
import initApollo from '../configs/apollo'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'

export default (App) => {
    return class Apollo extends React.Component {
        static displayName = 'withApollo(App)'
        static async getInitialProps(ctx) {
            const { Component, router } = ctx

            let appProps = {}
            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }

            // Run all GraphQL queries in the component tree
            // and extract the resulting data
            const apollo = initApollo()
            if (!process.browser) {
                try {
                    // Run all GraphQL queries
                    await getDataFromTree(
                        <App
                            {...appProps}
                            Component={Component}
                            router={router}
                            client={apollo}
                        />
                    )
                } catch (err) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                    console.error('Error while running `getDataFromTree`', err)
                }

                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind()
            }

            // Extract query data from the Apollo store
            const apolloState = apollo.cache.extract()

            return {
                ...appProps,
                apolloState
            }
        }

        constructor(props) {
            super(props)
            this.client = initApollo(props.apolloState)
        }

        render() {
            return <App {...this.props} client={this.client} />
        }
    }
}