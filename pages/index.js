import Layout from '../components/Layout';
import Lazyload from 'react-lazyload'
import { Grid, ImageBox, TextBox } from '../components/shared components'

export default class extends React.Component {
    static async getInitialProps(ctx) {
        // 48
        let beautySrc = "../static/assets/Banners/BANNER & PRODUCT BEAUTY-"
        // 11
        let rhythmSrc = "../static/assets/Banners/BANNER & PRODUCT RHYTHM-"
        // 54
        let specialSrc = "../static/assets/Banners/BANNER & PRODUCT SPECIAL WOMAN-"

        let beautyImgList = []
        let rhythmImgList = []
        let specialImgList = []

        const changeNumToString = num => {
            return num < 10 ? `0${num}` : `${num}`
        }

        for (let i = 1; i < 55; i++) {
            let str = changeNumToString(i)
            i < 12 && rhythmImgList.push({ path: `${rhythmSrc}${str}.png`, name: `BEAUTY-${str}` })
            i < 49 && beautyImgList.push({ path: `${beautySrc}${str}.png`, name: `RHYTHM-${str}` })
            specialImgList.push({ path: `${specialSrc}${str}.png`, name: `SPECIAL WOMAN-${str}` })
        }

        return { beautyImgList, rhythmImgList, specialImgList }
    }

    render() {
        return (
            <Layout>
                {this.props.beautyImgList &&
                    this.props.beautyImgList.map((data, index) =>
                        <div key={`beauty-${index}`} style={{ width: '100%' }}>
                            {index % 2 === 0 ?
                                <Grid>
                                    <Lazyload height={100}>
                                        <ImageBox position='left'>
                                            <img src={data.path} alt={data.name} width='100%' />
                                        </ImageBox>
                                    </Lazyload>
                                    <Lazyload height={100}>
                                        <TextBox position='right'>
                                            <h1 style={{ margin: 0, padding: 0 }}>{data.name}</h1>
                                        </TextBox>
                                    </Lazyload>
                                </Grid>
                                :
                                <Grid>
                                    <Lazyload height={100}>
                                        <TextBox position='left'>
                                            <h1 style={{ margin: 0, padding: 0 }}>{data.name}</h1>
                                        </TextBox>
                                    </Lazyload>
                                    <Lazyload height={100}>
                                        <ImageBox position='right'>
                                            <img src={data.path} alt={data.name} width='100%' />
                                        </ImageBox>
                                    </Lazyload>
                                </Grid>
                            }
                        </div>
                    )
                }
                {/* <div>
                    {
                        this.props.beautyImgList && this.props.beautyImgList.map((image, index) => < img key={`beauty-${index}`} src={image} alt={`beauty-${index}`} />)
                    }
                </div>
                <div>
                    {
                        this.props.rhythmImgList && this.props.rhythmImgList.map((image, index) => < img key={`rhythm-${index}`} src={image} alt={`rhythm-${index}`} />)
                    }
                </div>
                <div>
                    {
                        this.props.specialImgList && this.props.specialImgList.map((image, index) => < img key={`special-${index}`} src={image} alt={`special-${index}`} />)
                    }
                </div> */}
            </Layout>
        )
    }
}