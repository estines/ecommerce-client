import Document, { Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // styled components serverside
        let pageContext
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => {
            pageContext = props.pageContext
            return sheet.collectStyles(<App {...props} />)
        })
        const styleTags = sheet.getStyleElement()

        return {
            ...page,
            styleTags,
            pageContext,
            styles: (
                <React.Fragment>
                    <style
                        id="jss-server-side"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
                    />
                    {flush() || null}
                </React.Fragment>
            )
        }
    }


    render() {
        const { pageContext } = this.props
        return (
            <html>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Ecommerce Website</title>
                    <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}