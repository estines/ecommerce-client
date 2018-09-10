import LazyLoad from 'react-lazyload'
import fetch from 'isomorphic-unfetch'
import { Card, Image, Content } from '../../components/shared components'
import InfiniteScroll from 'react-infinite-scroll-component'
import Layout from '../../components/Layout'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(class extends React.Component {
    static async getInitialProps(ctx) {
        const url = "https://newsapi.org/v2/everything?q=bitcoin&pageSize=20"
        const res = await fetch(`${url}`, {
            method: 'get',
            headers: {
                "X-Api-Key": "48fcfe19930a442c9b3de523ae7d8da9"
            }
        })
        const { totalResults, articles } = await res.json()
        return { articles, totalResults }
    }

    state = {
        articles: [],
        fetchMore: true
    }

    componentDidMount() {
        const { articles } = this.props
        this.setState({ articles })
    }

    fetchMoreData = async () => {
        if (this.state.articles.length < 100) {
            const url = "https://newsapi.org/v2/everything?q=bitcoin&pageSize=20"
            const res = await fetch(`${url}`, {
                method: 'get',
                headers: {
                    "X-Api-Key": "48fcfe19930a442c9b3de523ae7d8da9"
                }
            })
            const { articles } = await res.json()
            this.setState({
                articles: this.state.articles.concat(articles)
            })
        } else {
            this.setState({ fetchMore: false })
        }
    }

    render() {
        const { articles, fetchMore } = this.state
        return (
            <Layout>
                <div style={{ margin: '0 30px 35px' }}>
                    <h1 style={{ margin: 0 }}>All Articles</h1>
                    <hr />
                </div>
                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={fetchMore}
                    loader={<CircularProgress className={this.props.classes.progress} />}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '100%',
                        justifyContent: 'space-around'
                    }}
                >
                    {
                        this.state.articles && this.state.articles.map((item, index) => (
                            <Card key={item.title + index}>
                                <LazyLoad height={200}>
                                    <Image src={item.urlToImage} alt={item.title} />
                                </LazyLoad>
                                <Content>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </Content>
                            </Card>
                        ))
                    }
                </InfiniteScroll>
            </Layout >
        )
    }
})