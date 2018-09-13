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
            i < 12 && i !== 8 && rhythmImgList.push({ path: `${rhythmSrc}${str}.png`, name: `RHYTHM-${str}` })
            i < 49 && i !== 8 && beautyImgList.push({ path: `${beautySrc}${str}.png`, name: `BEAUTY-${str}` })
            i !== 8 && specialImgList.push({ path: `${specialSrc}${str}.png`, name: `SPECIAL WOMAN-${str}` })
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
                                    <ImageBox position='left'>
                                        <img src={data.path} alt={data.name} width='100%' />
                                    </ImageBox>
                                    <TextBox position='right'>
                                        <h1 style={{ margin: 0, padding: 0 }}>{data.name}</h1>
                                    </TextBox>
                                </Grid>
                                :
                                <Grid>
                                    <TextBox position='left'>
                                        <h1 style={{ margin: 0, padding: 0 }}>{data.name}</h1>
                                    </TextBox>
                                    <ImageBox position='right'>
                                        <img src={data.path} alt={data.name} width='100%' />
                                    </ImageBox>
                                </Grid>
                            }
                        </div>
                    )
                }
                {this.props.rhythmImgList &&
                    this.props.rhythmImgList.map((data, index) =>
                        <div key={`rhythm-${index}`} style={{ width: '100%' }}>
                            {index % 2 === 0 ?
                                <Grid>
                                    <ImageBox position='left'>
                                        <img src={data.path} alt={data.name} width='100%' />
                                    </ImageBox>
                                    <TextBox position='right'>
                                        <h1 style={{ margin: 0, padding: 0 }}>{data.name}</h1>
                                    </TextBox>
                                </Grid>
                                :
                                <Grid>
                                    <TextBox position='left'>
                                        <h1 style={{ margin: 0, padding: 0 }}>{data.name}</h1>
                                    </TextBox>
                                    <ImageBox position='right'>
                                        <img src={data.path} alt={data.name} width='100%' />
                                    </ImageBox>
                                </Grid>
                            }
                        </div>
                    )
                }
                {this.props.specialImgList &&
                    this.props.specialImgList.map((data, index) =>
                        <div key={`special-${index}`} style={{ width: '100%' }}>
                            {index % 2 === 0 ?
                                <Grid>
                                    <ImageBox position='left'>
                                        <img src={data.path} alt={data.name} width='100%' />
                                    </ImageBox>
                                    <TextBox position='right'>
                                        <h1 style={{ margin: 0, padding: 0 }}>{data.name}</h1>
                                    </TextBox>
                                </Grid>
                                :
                                <Grid>
                                    <TextBox position='left'>
                                        <h1 style={{ margin: 0, padding: 0 }}>{data.name}</h1>
                                    </TextBox>
                                    <ImageBox position='right'>
                                        <img src={data.path} alt={data.name} width='100%' />
                                    </ImageBox>
                                </Grid>
                            }
                        </div>
                    )
                }
            </Layout>
        )
    }
}