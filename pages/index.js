import Link from 'next/link'

export default class extends React.Component {
    static async getInitialProps(ctx) {
        return { name: 1234 }
    }

    render() {
        return (
            <div>
                <p>hello next.js</p>
                <Link prefetch href="/test"><a>go to test</a></Link>
            </div>
        )
    }
}