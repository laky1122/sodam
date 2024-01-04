import Styles from './ca2.module.css';
import { useLocation } from 'react-router-dom';

import imgGyeonggi from '../../img/category4/Category2/Gyeonggi.png';
import imgGangWon from '../../img/category4/Category2/GangWon.png';
import imgChungCheong from '../../img/category4/Category2/ChungCheong.png';
import imgGyeongSang from '../../img/category4/Category2/GyeongSang.png';
import imgJeolla from '../../img/category4/Category2/Jeolla.png';
import imgJeju from '../../img/category4/Category2/Jeju.png';
import jsondata from './placedata.json';

function C4main1(){

    const location = useLocation();
    const areaName = new URLSearchParams(location.search).get("areaName");

    // 초기화
    let placeImg = "";
    let data;
    //쿼리스트링 받아온것대로 이미지 작업해줌
    switch(areaName){
        case 'Gyeonggi' :
            placeImg = imgGyeonggi;
            data = jsondata.Gyeonggi;
            break;
        case 'GangWon':
            placeImg = imgGangWon;
            data = jsondata.GangWon;
            break;
        case 'ChungCheong':
            placeImg = imgChungCheong;
            data = jsondata.ChungCheong;
            break;
        case 'GyeongSang':
            placeImg = imgGyeongSang;
            data = jsondata.GyeongSang;
            break;
        case 'Jeolla':
            placeImg = imgJeolla;
            data = jsondata.Jeolla;
            break;
        case 'Jeju':
            placeImg = imgJeju;
            data = jsondata.Jeju;
            break;
    }

    return <main className={Styles.mainContent}>
    <h1 className={Styles.mainTitle}>전체 지도</h1>
    <article className={Styles.mainArticle}>
        <hr />
    </article>
    <article className={Styles.mainArticle}>
        <div className="box">
            <div className={Styles.categoryTitle}>양조장 알아보기</div>
        </div>
    </article>
    <article className={Styles.placeContent}>
        <div className={Styles.img}>
            <span>
                <img src={placeImg} className={Styles.imgFile} alt=""/>
            </span>
        </div>
        <div className={Styles.mapList}>
            <ul className= {Styles.mapUlist}>
                <li>
                    <div className = {Styles.lTop}>
                        <div className={Styles.nump}>1</div>
                        <div className={Styles.subject}>{data[0].placename}</div>
                    </div>
                    <div className = {Styles.lBody}>
                        <div className = {Styles.info}>
                            <dl>
                                <dt>주소</dt>
                                <dd>{data[0].placeaddr}</dd>
                            </dl>
                            <dl>
                                <dt>주종</dt>
                                <dd>{data[0].placetype}</dd>
                            </dl>
                            <dl>
                                <dt>연락처</dt>
                                <dd>{data[0].placetel}</dd>
                            </dl>
                        </div>
                        <a href={"./main3?areaName="+areaName+"&brewId=0"} className={Styles.link}>상세보기</a>
                    </div>
                </li>
                <li>
                    <div className={Styles.lTop}>
                        <div className={Styles.nump}>2</div>
                        <div className={Styles.subject}>{data[1].placename}</div>
                    </div>
                    <div className = {Styles.lBody}>
                        <div className = {Styles.info}>
                            <dl>
                                <dt>주소</dt>
                                <dd>{data[1].placeaddr}</dd>
                            </dl>
                            <dl>
                                <dt>주종</dt>
                                <dd>{data[1].placetype}</dd>
                            </dl>
                            <dl>
                                <dt>연락처</dt>
                                <dd>{data[1].placetel}</dd>
                            </dl>
                        </div>
                        <a href={"./main3?areaName="+areaName+"&brewId=1"} className={Styles.link}>상세보기</a>
                    </div>
                </li>
                <li>
                    <div className = {Styles.lTop}>
                        <div className={Styles.nump}>3</div>
                        <div className={Styles.subject}>{data[2].placename}</div>
                    </div>
                    <div className = {Styles.lBody}>
                        <div className = {Styles.info}>
                            <dl>
                                <dt>주소</dt>
                                <dd>{data[2].placeaddr}</dd>
                            </dl>
                            <dl>
                                <dt>주종</dt>
                                <dd>{data[2].placetype}</dd>
                            </dl>
                            <dl>
                                <dt>연락처</dt>
                                <dd>{data[2].placetel}</dd>
                            </dl>
                        </div>
                        <a href={"./main3?areaName="+areaName+"&brewId=2"} className={Styles.link}>상세보기</a>
                    </div>
                </li>
            </ul>
        </div>
    </article>
</main>
}

export default C4main1;
