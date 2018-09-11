import Layout from '../../components/Layout';
import { Aside, Contents, Main } from '../../components/shared components'
import Lazyload from 'react-lazyload'
import Link from 'next/link'
import CatagoriesSidebar from '../../components/Csidebar'

export default class extends React.Component {
    static async getInitialProps(ctx) {
        let beauty = "../static/assets/Banners/BANNER & PRODUCT BEAUTY-08.png"
        let rhythm = "../static/assets/Banners/BANNER & PRODUCT RHYTHM-08.png"
        let special = "../static/assets/Banners/BANNER & PRODUCT SPECIAL WOMAN-08.png"

        return { beauty, special, rhythm }
    }

    render() {
        const { beauty, special, rhythm } = this.props
        return (
            <Layout>
                <Contents>
                    <Aside>
                        <CatagoriesSidebar />
                    </Aside>
                    <Main>
                        {beauty &&
                            <div>
                                <Lazyload height={400}>
                                    <Link prefetch href="/collection/catagory?name=special">
                                        <img src={beauty} alt={beauty} width='100%' style={{ objectFit: 'scale-down' }} />
                                    </Link>
                                </Lazyload>
                            </div>
                        }
                        {rhythm &&
                            <div>
                                <Lazyload height={400}>
                                    <Link prefetch href="/collection/catagory?name=rhythm">
                                        <img src={rhythm} alt={rhythm} width='100%' style={{ objectFit: 'scale-down' }} />
                                    </Link>
                                </Lazyload>
                            </div>
                        }
                        {special &&
                            <div>
                                <Lazyload height={400}>
                                    <Link prefetch href="/collection/catagory?name=special">
                                        <img src={special} alt={special} width='100%' style={{ objectFit: 'scale-down' }} />
                                    </Link>
                                </Lazyload>
                            </div>
                        }
                    </Main>
                </Contents>
            </Layout>
        )
    }
}