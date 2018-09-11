import Link from 'next/link'
import styled from 'styled-components'
import { NavFlexBox, NavMenu } from './shared components'

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
`

const MenuItem = ({ children, ...props }) => (
    <Link {...props}>
        <NavFlexBox>
            <NavMenu>{children}</NavMenu>
        </NavFlexBox>
    </Link>
)

export default () => (
    <React.Fragment>
        <h2 style={{ margin: 0, marginTop: 30 }}>Catagories</h2>
        <MenuList>
            <li>
                <MenuItem prefetch href="/collection/catagory?name=beauty" >Beauty Set</MenuItem>
            </li>
            <li>
                <MenuItem prefetch href="/collection/catagory?name=rhythm" >Rhythm Set</MenuItem>
            </li>
            <li>
                <MenuItem prefetch href="/collection/catagory?name=special">Special Set</MenuItem>
            </li>
        </MenuList>
    </React.Fragment>
)