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
        <Link prefetch href="/videos">
            <NavBlock>
                <NavMenu>Videos</NavMenu>
            </NavBlock>
        </Link>
        <Link prefetch href="/payments">
            <NavBlock>
                <NavMenu>Payments</NavMenu>
            </NavBlock>
        </Link>
    </React.Fragment>
)