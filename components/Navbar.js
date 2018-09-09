import { FlexBox } from './shared components'
import Links from './Links'
import Searchbox from './Searchbox'

export default () => (
    <FlexBox align="flex-end" style={{ margin: 30 }}>
        <Links />
        <Searchbox />
    </FlexBox>
)