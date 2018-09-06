import Document, { Main, NextScript } from 'next/document'
import AppHead from '../components/shared components/head'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <AppHead />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}