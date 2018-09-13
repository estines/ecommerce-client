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
            <NavMenu padding="4px 0" underline="5px">{children}</NavMenu>
        </NavFlexBox>
    </Link>
)

export default () => (
    <MenuList>
        <li>
            <h4>คู่มือการซื้อ</h4>
            <MenuList>
                <li>
                    <MenuItem href="/payments?target=วิธีการสั่งซื้อสินค้า">วิธีการสั่งซื้อสินค้า</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=ข้อมูลทั่วไป">ข้อมูลทั่วไป</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=การชำระเงิน">การชำระเงิน</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=การส่งสินค้า">การส่งสินค้า</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=การเปลี่ยนและการส่งคืน">การเปลี่ยนและการส่งคืน</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=สินค้าที่เรียกคืน">สินค้าที่เรียกคืน</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=บัญชีของฉัน">บัญชีของฉัน</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=ติดตามเรา">ติดตามเรา</MenuItem>
                </li>
            </MenuList>
        </li>
        <li>
            <h4>จดหมายข่าว</h4>
            <MenuList>
                <li>
                    <MenuItem href="/payments?target=INSTAGRAM">INSTAGRAM</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=FACEBOOK">FACEBOOK</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=TWITTER">TWITTER</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=PINTEREST">PINTEREST</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=YOUTUBE">YOUTUBE</MenuItem>
                </li>
            </MenuList>
        </li>
        <li>
            <h4>นโยบาย</h4>
            <MenuList>
                <li>
                    <MenuItem href="/payments?target=นโยบายความเป็นส่วนตัว">นโยบายความเป็นส่วนตัว</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=เงื่อนไขการซื้อ">เงื่อนไขการซื้อ</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=บริษัท">บริษัท</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=เกี่ยวกับเรา">เกี่ยวกับเรา</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=สำนักงาน">สำนักงาน</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=ร้านค้า">ร้านค้า</MenuItem>
                </li>
                <li>
                    <MenuItem href="/payments?target=ติดต่อ">ติดต่อ</MenuItem>
                </li>
            </MenuList>
        </li>

    </MenuList>
)