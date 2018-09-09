import Layout from '../../components/Layout';
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const Aside = styled.div`
    display: flex;
    flex: 1;    
`

const Main = styled.div`
    display: flex;
    flex: 3;
`

const MenuList = styled.ul`
    list-style: none;
`

export default class extends React.Component {
    static async getInitialProps(ctx) {
        return {}
    }

    render() {
        return (
            <Layout>
                <Content>
                    <Aside>
                        1
                    </Aside>
                    <Main>
                        2
                    </Main>
                </Content>
            </Layout>
        )
    }
}