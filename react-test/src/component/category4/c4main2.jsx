import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Styles from './ca3.module.css'


import jsondata from './placedata.json';

function C4main2(){
    const navigate = useNavigate();

    function back(){
        navigate(-1);
    }

    //1.url에서가져옴
    const location = useLocation();
    const areaName = new URLSearchParams(location.search).get("areaName");
    const brewId = new URLSearchParams(location.search).get("brewId");
    
    // 초기화
    const brewIdnum = parseInt(brewId);
    let data;
    let pname;
    let paddr;
    let ptype;
    let ptel;
    let purl;

    let img1;
    let img2;
    let img3;
    let img4;
    
    let prod1;
    let prod2;
    let prod3;
    //쿼리스트링 받아온것대로 이미지 작업해줌
    const brew = () => {

        pname =  data[brewIdnum].placename;
        paddr =  data[brewIdnum].placeaddr;
        ptype =  data[brewIdnum].placetype;
        ptel =  data[brewIdnum].placetel;
        purl =  data[brewIdnum].placeurl;

        img1 = data[brewIdnum].placeimg;

        img2 = data[brewIdnum].placeproduct[0].img;
        img3 = data[brewIdnum].placeproduct[1].img;
        img4 = data[brewIdnum].placeproduct[2].img;


        prod1 = data[brewIdnum].placeproduct[0];
        prod2 = data[brewIdnum].placeproduct[1];
        prod3 = data[brewIdnum].placeproduct[2];
    }

    
    switch(areaName){
        case 'Gyeonggi' :
            data = jsondata.Gyeonggi;
            brew();
            break;
        case 'GangWon':
            data = jsondata.GangWon;
            brew();
            break;
        case 'ChungCheong':

            data = jsondata.ChungCheong;
            brew();
            break;
        case 'GyeongSang':

            data = jsondata.GyeongSang;
            brew();
            break;
        case 'Jeolla':

            data = jsondata.Jeolla;
            brew();
            break;
        case 'Jeju':

            data = jsondata.Jeju;
            brew();
            break;
    }

   



    return <main className={Styles.mainContent}>
    <h1 className={Styles.mainTitle}>전체 지도</h1>
    <article>
        <div className="box">
            <div className={Styles.categoryTitle}>양조장 상세보기</div>
        </div>
    </article>
    <article id={Styles.place}>
        <div id={Styles.brewery}>
            <div className={Styles.placeView}>
                <dl>
                    <dt className={Styles.subject}> ~ {pname} ~ </dt>
                    <div className={Styles.frontImg}>
                        <span>
                            <img src={img1}/>
                        </span>
                    </div>
                    <dd>
                        <div className={Styles.placeTable}>
                            <table>
                                <colgroup className={Styles.colgroup}></colgroup>
                                <tbody>
                                    <tr>
                                        <th>주소</th>
                                        <td>
                                            <div className={Styles.textField}>{paddr}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>주종</th>
                                        <td>
                                            <div className={Styles.textField}>{ptype}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>연락처</th>
                                        <td>
                                            <div className={Styles.textField}>{ptel}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>홈페이지</th>
                                        <td>
                                            <div className={Styles.textField}><a href={purl}
                                                    target="_blank">{purl}</a></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </dd>
                    <dd className={Styles.item}>
                        <div>
                            <span>주요제품</span>
                        </div>
                        <div className={Styles.more}>
                            <ul className={Styles.mainProduct}>
                                <li>
                                    <div className={Styles.itemWrap}>
                                        <div className={Styles.brewImg}>
                                            <span>
                                                <img src={img2} alt="" />
                                            </span>
                                        </div>
                                        <div className={Styles.productInfo}>
                                            <div className={Styles.brewName}>{prod1.name}</div>
                                            <div className={Styles.brewNum}>
                                                <span>{prod1.ml}</span>
                                                <span>{prod1.alcohol}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className={Styles.itemWrap}>
                                        <div className={Styles.brewImg}>
                                            <span>
                                                <img src={img3} alt="" />
                                            </span>
                                        </div>
                                        <div className={Styles.productInfo}>
                                        <div className={Styles.brewName}>{prod2.name}</div>
                                            <div className={Styles.brewNum}>
                                                <span>{prod2.ml}</span>
                                                <span>{prod2.alcohol}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className={Styles.itemWrap}>
                                        <div className={Styles.brewImg}>
                                            <span>
                                                <img src={img4} alt="" />
                                            </span>
                                        </div>
                                        <div className={Styles.productInfo}>
                                        <div className={Styles.brewName}>{prod3.name}</div>
                                            <div className={Styles.brewNum}>
                                                <span>{prod3.ml}</span>
                                                <span>{prod3.alcohol}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </dd>
                </dl>
            </div>
            <div className={Styles.btnArea}>
                <button type="button" className={Styles.btnPrimary} onClick={back}>목록</button>
            </div>
        </div>

    </article>
</main>
}


export default C4main2;