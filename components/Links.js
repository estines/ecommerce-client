import { NavMenu, NavBlock } from './shared components'
import Link from 'next/link'

export default () => (
    <React.Fragment>
        <Link prefetch href="/">
            <NavBlock style={{ marginRight: 30 }}>
                <img src='/static/assets/logo-jubilee.png' alt="Jubilee Diamond" width="120px" style={{ cursor: 'pointer' }} />
            </NavBlock>
        </Link>
        <Link prefetch href="/articles">
            <NavBlock>
                <NavMenu>ARTICLES</NavMenu>
            </NavBlock>
        </Link>
        <Link prefetch href="/collection">
            <NavBlock>
                <NavMenu>COLLECTION</NavMenu>
            </NavBlock>
        </Link>
        {/* <Link prefetch href="/jewelry">
            <NavBlock>
                <NavMenu>JEWELRY</NavMenu>
            </NavBlock>
        </Link>
        <Link prefetch href="/forevermark">
            <NavBlock>
                <NavMenu>FOREVERMARK</NavMenu>
            </NavBlock>
        </Link>
        <Link prefetch href="/theworldofjubilee">
            <NavBlock>
                <NavMenu>THE WORLD OF JUBILEE</NavMenu>
            </NavBlock>
        </Link>
        <Link prefetch href="/diamonexpert">
            <NavBlock>
                <NavMenu>JUBILEE DIAMOND EXPERT</NavMenu>
            </NavBlock>
        </Link>
        <Link prefetch href="/promotion">
            <NavBlock>
                <NavMenu>PROMOTION</NavMenu>
            </NavBlock>
        </Link> */}
    </React.Fragment>
)