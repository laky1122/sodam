import img1 from '../../img/category4/Category1/Main.png';
import img2 from '../../img/category4/Category1/ReGuidebook.png';
import Styles from './ca.module.css';
import {Link} from 'react-router-dom';

function C4main(){

    return <main className={Styles.mainContent}>
    <h1 className={Styles.mainTitle}>전체 지도</h1>
    <article className={Styles.mainArticle}>
        <hr/>
    </article>
    <article className={Styles.mainArticle}>
        <div className="box">
            <div className={Styles.categoryTitle}>양조장 카테고리</div>
        </div>
    </article>
    <article className={Styles.placeContent}>
        <div className= {Styles.imgFile}>
            <span>
                <img src={img1} alt="Map"/>
            </span>
        </div>
        <div className={Styles.areaList}>
            <div className={Styles.areaBox}>
                <div className={Styles.area}>
                    <dl>
                        <Link to="../category4/main2?areaName=Gyeonggi">경기도</Link>
                    </dl>
                </div>
                <div className={Styles.area}>
                    <dl>
                        <Link to="../category4/main2?areaName=GangWon">강원도</Link>
                    </dl>
                </div>
                <div className={Styles.area}>
                    <dl>
                        <Link to="../category4/main2?areaName=ChungCheong">충청도</Link>
                    </dl>
                </div>
                <div className={Styles.area}>
                    <dl>
                        <Link to="../category4/main2?areaName=GyeongSang">경상도</Link>
                    </dl>
                </div>
                <div className={Styles.area}>
                    <dl>
                        <Link to="../category4/main2?areaName=Jeolla">전라도</Link>
                    </dl>
                </div>
                <div className={Styles.area}>
                    <dl>
                        <Link to="../category4/main2?areaName=Jeju">제주도</Link>
                    </dl>
                </div>
            </div>
            <div className={Styles.guide}>
                <img alt="" src={img2}/>
                <div className={Styles.guideText}>가족친구와 함께 떠나는 우리술 낭만 여행<br />찾아가는 양조장 50</div>
                <a className={Styles.downloadButton} download="" href="https://thesool.com/file/2022_GUIDEBOOK.pdf"><span>PDF 다운로드</span></a>
            </div>
        </div>
    </article>
</main>
    
}

export default C4main;