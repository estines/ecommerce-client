import Layout from '../components/Layout'
import { Contents, Aside, Main } from '../components/shared components'
import PaymentSidebar from '../components/PaymentSidebar'

export default class extends React.Component {
    state = {
        isCollapse: false
    }

    handleCollapse = index => {
        this.setState({
            [index]: !this.state[index]
        })
    }

    render() {
        return (
            <Layout>
                <Contents>
                    <Aside>
                        <PaymentSidebar />
                    </Aside>
                    <Main>
                        <ul style={{ listStyle: 'none' }}>
                            <h2 style={{ marginBottom: 30 }}>คำแนะนำการซื้อ</h2>
                            <li><h3><span><i className="fas fa-caret-right" style={{ marginRight: 15 }} /></span>วิธีการซื้อ</h3></li>
                            <li><h3><span><i className="fas fa-caret-right" style={{ marginRight: 15 }} /></span>ข้อมูลทั่วไป</h3></li>
                            <li>
                                <h3><span><i className="fas fa-caret-down" style={{ marginRight: 10 }} /></span>การชำระเงิน</h3>
                                <div style={{ marginLeft: 40 }}>
                                    <h4>ฉันสามารถชำระเงินสำหรับการสั่งซื้อของฉันด้วยวิธีไหน</h4>
                                    <p>เรานำเสนอวิธีการชำระเงินดังต่อไปนี้: Visa, Mastercard, China Union Pay, American Express และ หักบัญชีธนาคาร.</p>
                                    <ul className="list-payment-icons">
                                        <li>
                                            <img style={{ height: 28 }} src="https://static.zara.net/static//images/payment/payment/vis.svg" alt="Visa" />
                                        </li>
                                        <li>
                                            <img style={{ height: 28 }} src="https://static.zara.net/static//images/payment/payment/mas.svg" alt="Mastercard" />
                                        </li>
                                        <li>
                                            <img style={{ height: 28 }} src="https://static.zara.net/static//images/payment/payment/ame-3.svg" alt="American Express" />
                                        </li>
                                        <li>
                                            <img style={{ height: 28 }} src="https://static.zara.net/static//images/payment/payment/union-pay.svg" alt="China Union Pay" />
                                        </li>
                                        <li>
                                            <img style={{ height: 28 }} src="https://static.zara.net/static//images/payment/payment/banking.svg" alt="หักบัญชีธนาคาร" />
                                        </li>
                                    </ul>
                                    <h4>เหตุใดบัตรเครดิตของฉันจึงอาจถูกปฏิเสธ</h4>
                                    <p>บัตรเครดิตของคุณอาจจะถูกปฏิเสธด้วยเหตุผลดังต่อไปนี้:</p>
                                    <ul className="sublist-dashed">
                                        <li>บัตรอาจจะหมดอายุ ตรวจสอบดูว่าบัตรยังคงใช้ได้</li>
                                        <li>คุณอาจจะใช้จ่ายจนเต็มวงเงินแล้ว ติดต่อธนาคารของคุณเพื่อตรวจสอบว่าคุณไม่ได้ใช้จ่ายเกินวงเงินที่ได้รับอนุมัติ</li>
                                        <li>คุณอาจจะป้อนข้อมูลบางอย่างไม่ถูกต้อง ตรวจสอบดูว่า คุณได้กรอกข้อมูลที่จำเป็นลงในช่องอย่างถูกต้อง</li>
                                    </ul>
                                    <h4>ฉันสามารถเพิ่มรายละเอียดบริษัทของฉันในใบแจ้งราคาสินค้าได้ใช่หรือไม่</h4>
                                    <p>ได้ คุณเพียงแค่คลิกที่ตัวเลือกธุรกิจในช่องรายละเอียดส่วนบุคคล คุณจะสามารถป้อนรายละเอียดเกี่ยวกับบริษัทและข้อมูลผู้เสียภาษีได้</p>
                                    <h4>การใช้บัตรเครดิตของฉันบนเว็บไซต์จะมีความปลอดภัยใช่หรือไม่</h4>
                                    <p>ใช่ ข้อมูลได้ส่งในรูปแบบการเข้ารหัส SSL สำหรับการจ่ายด้วยบัตรเครดิตและเดบิตนั้น ต้องใส่รหัส CVV (Card Verification Value) ซึ่งเป็นรหัสที่พิมพ์อยู่บนบัตรเพื่อใช้เป็นวิธีการรักษาความปลอดภัยของการทำธุรกรรม</p>
                                </div>
                            </li>
                            <li><h3><span><i className="fas fa-caret-right" style={{ marginRight: 15 }} /></span>การส่งมอบ</h3></li>
                            <li><h3><span><i className="fas fa-caret-right" style={{ marginRight: 15 }} /></span>เปลี่ยนและคืนสินค้า</h3></li>
                            <li><h3><span><i className="fas fa-caret-right" style={{ marginRight: 15 }} /></span>เทคโนโลยี</h3></li>
                            <li><h3><span><i className="fas fa-caret-right" style={{ marginRight: 15 }} /></span>รายการที่เรียกคืน</h3></li>
                        </ul>
                    </Main>
                </Contents>
                <style jsx>{`
                    .list-payment-icons, .sublist-dashed {
                        list-style: none;
                        margin: 0;
                        margin-top: 35px;
                        padding: 0;
                        border: 0;
                        font: inherit;
                        font-size: 100%;
                        vertical-align: baseline;
                    }

                    .sublist-dashed {
                        margin: 0 0 0 6px;
                        position: relative;
                    }

                    .sublist-dashed > li::before {
                        content: "-";
                        position: relative;
                        left: -5px;
                        float: left;
                    }

                    .list-payment-icons > li {
                        display: inline-block;
                        margin: 0 25px 10px 0;
                    }

                    p {
                        width: 600px;
                    }
                `}</style>
            </Layout >
        )
    }
}