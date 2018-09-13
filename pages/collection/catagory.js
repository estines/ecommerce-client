import Layout from '../../components/Layout'
import Lazyload from 'react-lazyload'
import { Contents, Main, Aside, Grid, ImageBox } from '../../components/shared components'
import CatagorySidebar from '../../components/Csidebar'
import Router from 'next/router'
import { printIntrospectionSchema } from 'graphql/utilities';

export default class Product extends React.Component {
    static async getInitialProps(ctx) {
        const { query } = ctx
        let beautySrc = "../static/assets/Banners/BANNER & PRODUCT BEAUTY-"
        let rhythmSrc = "../static/assets/Banners/BANNER & PRODUCT RHYTHM-"
        let specialSrc = "../static/assets/Banners/BANNER & PRODUCT SPECIAL WOMAN-"

        let queryStr = query.name
        let result = []

        const changeNumToString = num => {
            return num < 10 ? `0${num}` : `${num}`
        }

        for (let i = 1; i < 55; i++) {
            let str = changeNumToString(i)
            if (queryStr === 'beauty') {
                i < 49 && i !== 8 && result.push({ path: `${beautySrc}${str}.png`, name: `BEAUTY-${str}` })
            } else if (queryStr === 'rhythm') {
                i < 12 && i !== 8 && result.push({ path: `${rhythmSrc}${str}.png`, name: `RHYTHM-${str}` })
            } else {
                i !== 8 && result.push({ path: `${specialSrc}${str}.png`, name: `SPECIAL WOMAN-${str}` })
            }
        }
        return { result, query }
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.query !== nextProps.query) {
            return true
        }
        return false
    }

    onClickHandler = item => Router.push(`/collection/detail?name=${item.name}`)

    render() {
        const { result } = this.props
        return (
            <Layout>
                <Contents>
                    <Aside>
                        <CatagorySidebar />
                    </Aside>
                    <Main>
                        <Grid>
                            {
                                result ? result.map((item, index) => {
                                    return (
                                        <ImageBox key={item.name + index} position={index % 2 === 0 ? 'left' : 'right'}>
                                            <div>
                                                <h4>{item.name}</h4>
                                            </div>
                                            <img src={item.path} alt={item.name} width="100%" style={{ cursor: 'pointer' }} onClick={() => this.onClickHandler(item)} />
                                        </ImageBox>
                                    )
                                }) : null
                            }
                        </Grid>
                    </Main>
                </Contents>
            </Layout>
        )
    }
}