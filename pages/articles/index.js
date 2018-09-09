import LazyLoad from 'react-lazyload'
import fetch from 'isomorphic-unfetch'
import { Articles, Card, Image, Content } from '../../components/shared components'
import Layout from '../../components/Layout'

export default class extends React.Component {
    static async getInitialProps(ctx) {
        const url = "https://newsapi.org/v2/everything?q=bitcoin&pageSize=100"
        const res = await fetch(`${url}`, {
            method: 'get',
            headers: {
                "X-Api-Key": "48fcfe19930a442c9b3de523ae7d8da9"
            }
        })
        const { totalResults, articles } = await res.json()
        return { articles, totalResults }
    }

    render() {
        return (
            <Layout>
                <div style={{ margin: '0 30px 35px' }}>
                    <h1 style={{ margin: 0 }}>All Articles</h1>
                    <hr />
                </div>
                <Articles>
                    {
                        this.props.articles && this.props.articles.map(item => (
                            <Card key={item.title}>
                                <LazyLoad height={400}>
                                    <Image src={item.urlToImage} alt={item.title} />
                                </LazyLoad>
                                <Content>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </Content>
                            </Card>
                        ))
                    }
                </Articles>
            </Layout>
        )
    }
}