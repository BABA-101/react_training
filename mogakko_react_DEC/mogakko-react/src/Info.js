//src/Info.js
import styles from './Info.module.css'

function Info() {
    return <div>
        <h1 className={styles.title}>마켓컬리</h1>
        <b className={styles.info}>마켓컬리(market kurly)는 ㈜컬리에서 운영하고 있는 푸드마켓 사이트, 즉 신선 식품 온라인 소핑몰이다. <br></br>
            높은 품질의 식자재들을 유통하여 가격대가 있는 편이지만, 해당 쇼핑몰의 이용하는 고객의 만족도는 상당히 높다.<br></br>
            양질의 상품을 가장 신선한 상태로 배송하기 위한 샛별배송 서비스가 존재한다.</b>
    </div>

}

export default Info;


