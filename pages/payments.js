import Layout from '../components/Layout'
import { Contents, Aside, Main } from '../components/shared components'
import PaymentSidebar from '../components/PaymentSidebar'

export default class extends React.Component {
    render() {
        return (
            <Layout>
                <Contents>
                    <Aside>
                        <PaymentSidebar />
                    </Aside>
                    <Main>

                    </Main>
                </Contents>
            </Layout>
        )
    }
}