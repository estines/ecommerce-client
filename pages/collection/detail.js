import Layout from "../../components/Layout"
import { Contents, Main, Aside } from '../../components/shared components'
import CatagorySidebar from '../../components/Csidebar'

export default class extends React.Component {
    static async getInitialProps(ctx) {
        const path = `../static/assets/Banners/BANNER & PRODUCT ${ctx.query.name}.png`
        return { ...ctx.query, path }
    }

    render() {
        return (
            <Layout>
                <Contents>
                    <Aside>
                        <CatagorySidebar />
                    </Aside>
                    <Main>
                        <h3 style={{ margin: '35px 50px 20px' }}><u>{this.props.name}</u></h3>
                        <img src={`../${this.props.path}`} alt={this.props.name} />
                    </Main>
                </Contents>
            </Layout>
        )
    }
}