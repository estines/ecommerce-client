import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

export default class extends React.Component {
    static async getInitialProps(ctx) {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
        const shows = await res.json()
        return { shows }
    }

    render() {
        return (
            <React.Fragment>
                <Link href='/'><a>back</a></Link>
                <h1>Batman TV Shows</h1>
                <ul>
                    {this.props.shows.map(({ show }) => (
                        <li key={show.id}>
                            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}