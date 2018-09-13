import Document, { Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({ query, renderPage }) {
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
                    <meta name="Description" content="Put your description here."></meta>
                    <title>Ecommerce Website</title>
                    <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
                    <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
                    {this.props.styleTags}
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB" crossorigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}