import "../css/RendingPageMain.css"
import 첫번째섹터 from '../image/첫번째섹터.png';
import 두번째섹터 from '../image/두번째섹터.png';
import 세번째섹터 from '../image/세번째섹터.png';
import 네번째섹터 from '../image/네번째섹터.png';
import 다섯번째섹터 from '../image/다섯번째섹터.png';
import { Link } from "react-router-dom";

function RendingPageMain() {
    return (
        <>
            <section className="main1">
                <div className="main1-contain">
                    <div className="main1-text-contain">
                        <div className="main1-text">
                            일상의 모든 물건을 <br />거래해 보세요
                        </div>
                        <Link to="/sprint5" className="button button-alt">구경하러 가기</Link>
                    </div>
                    <img src={첫번째섹터} alt="첫번째섹터" />
                </div>
            </section>

            <section className="main2">
                <div className="main2-contain">
                    <img src={두번째섹터} alt="두번째섹터" />

                    <div className="main2-text-contain">
                        <div className="main2-text1">Hot item</div>
                        <div className="main2-text2">
                            인기 상품을 <br />확인해 보세요
                        </div>
                        <div className="main2-text3">
                            가장 HOT한 중고거래 물품을 <br />판다 마켓에서 확인해 보세요
                        </div>
                    </div>
                </div>
            </section>

            <section className="main3">
                <div className="main3-contain">
                    <div className="main3-text-contain">
                        <div className="main3-text1">Search</div>
                        <div className="main3-text2">
                            구매를 원하는<br /> 상품을 검색하세요
                        </div>
                        <div className="main3-text3">
                            구매하고 싶은 물품은 검색해서<br />쉽게 찾아보세요
                        </div>
                    </div>
                    <img src={세번째섹터} alt="세번째섹터" />
                </div>
            </section>

            <section className="main4">
                <div className="main4-contain">
                    <img src={네번째섹터} alt="네번째섹터" />
                    <div className="main4-text-contain">
                        <div className="main4-text1">Register</div>

                        <div className="main4-text2">
                            판매를 원하는<br /> 상품을 등록하세요
                        </div>

                        <div className="main4-text3">
                            어떤 물건이든 판매하고 싶은 상품을<br />쉽게 등록하세요
                        </div>
                    </div>
                </div>
            </section>

            <section className="main5">
                <div className="main5-contain">
                    <div className="main5-text-contain">
                        <div className="main5-text">
                            믿을 수 있는<br /> 판다마켓 중고 거래
                        </div>
                    </div>
                    <img src={다섯번째섹터} alt="다섯번째섹터" />
                </div>
            </section>
        </>
    );
}

export default RendingPageMain;