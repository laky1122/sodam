
import Styles from './page.module.css';

import img1 from '../../img/category3/category/Board.png';

import img2 from '../../img/category3/category2/남촌가주.jpg';
import img3 from '../../img/category3/category2/뱅바틀샵.jpg';
import img4 from '../../img/category3/category2/보틀날.jpg';
import img5 from '../../img/category3/category2/술25.jpg';
import img6 from '../../img/category3/category2/우리술애.jpg';
import img7 from '../../img/category3/category2/우리술히어로.jpg';
import img8 from '../../img/category3/category2/제주수울.jpg';
import img9 from '../../img/category3/category2/주류사회.jpg';
import img10 from '../../img/category3/category2/오늘 술.jpg';



function Page(){



    return   <main>


    <h1 id={Styles.h1}>오프라인 판매처</h1>

    <article>

        <div className={Styles.search}>
            <div className={Styles.searchSelect}>
                <select id={Styles.key} name="key">
                    <option value="B000000215" id={Styles.option}>판매처명</option>
                </select>
            </div>
            <div className={Styles.searchInput}>
                <input type="text" id={Styles.searchin} name="searchin" />
                <button type="submit" id={Styles.button}>
                    <img src={img1}  className={Styles.board}/>
                </button>
            </div>


        </div>
            <hr/>
        <div className={Styles.grid}>



            <div className={Styles.as}>
            
                <div className={Styles.imgList}>
                    <ul id={Styles.num3}>
                    <li>

                        <div className={Styles.screen}>
                        <a href="https://map.naver.com/p/search/%EB%82%A8%EC%B4%8C%EA%B0%80%EC%A3%BC/place/1661609022?c=15.00,0,0,0,dh&isCorrectAnswer=true" target="_blank" className={Styles.el}>
                            <span>
                            <img src={img2} />
                            </span>
                        </a>
                        </div>
                    </li>
                    </ul>
                </div>
                
                <div className={Styles.textArea}>
                    <div className={Styles.sub}>
                    <a href="#none">
                        <span className={Styles.ee}>
                        남촌가주
                        </span>
                    </a>

                    

                    <ul className={Styles.sell}>
                        <li className={Styles.style}>&#x2B50;
                            <span className={Styles.el}>
                                <a href="https://map.naver.com/p/search/%EB%82%A8%EC%B4%8C%EA%B0%80%EC%A3%BC/place/1661609022?c=15.00,0,0,0,dh&isCorrectAnswer=true" target="blank">
                                서울 중구 퇴계로6 길16
                                </a>
                            </span>
                        </li>
                        <li className={Styles.tel}>
                            &#x1F4F2;
                            <span className={Styles.el}>
                                02{')'} 757-8959
                            </span>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        
            

            <div className={Styles.as}>
            
            <div className={Styles.imgList}>
                <ul id={Styles.num3}>
                <li>

                    <div className={Styles.screen}>
                    <a href="https://map.naver.com/p/search/%EB%B1%85%EB%B0%94%ED%8B%80%EC%83%B5/place/1998646741?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                        target="_blank" className={Styles.el}>
                        <span>
                        <img src={img3} />
                        </span>
                    </a>
                    </div>
                </li>
                </ul>
            </div>
            
            <div className={Styles.textArea}>
                <div className={Styles.sub}>
                <a href="#none">
                    <span className={Styles.ee}>
                    뱅바틀샵
                    </span>
                </a>

                

                <ul className={Styles.sell}>
                    <li className={Styles.style}>&#x2B50;
                    <span className={Styles.el}>
                        <a href="https://map.naver.com/p/search/%EB%B1%85%EB%B0%94%ED%8B%80%EC%83%B5/place/1998646741?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                        target="blank">
                        경기 구리시 안골로103번길 57-3 1층
                        </a>
                    </span>
                    </li>
                    <li className={Styles.tel}>
                    &#x1F4F2;
                    <span className={Styles.el}>
                        031-552-2549
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            

            <div className={Styles.as}>
            
            <div className={Styles.imgList}>
                <ul id={Styles.num3}>
                <li>

                    <div className={Styles.screen}>
                    <a href="https://map.naver.com/p/search/%EB%B3%B4%ED%8B%80%EB%82%A0/place/1563080348?c=15.00,0,0,0,dh&placePath=?entry%3Dbmp"
                        target="_blank" className={Styles.el}>
                        <span>
                        <img src={img4} />
                        </span>
                    </a>
                    </div>
                </li>
                </ul>
            </div>
            
            <div className={Styles.textArea}>
                <div className={Styles.sub}>
                <a href="#none">
                    <span className={Styles.ee}>
                    보틀날
                    </span>
                </a>

                

                <ul className={Styles.sell}>
                    <li className={Styles.style}>&#x2B50;
                    <span className={Styles.el}>
                        <a href="https://map.naver.com/p/search/%EB%B3%B4%ED%8B%80%EB%82%A0/place/1563080348?c=15.00,0,0,0,dh&placePath=?entry%3Dbmp"
                        target="blank">
                        경기 안양시 동안구 평촌대로127번길 38 103호
                        </a>
                    </span>
                    </li>
                    <li className={Styles.tel}>
                    &#x1F4F2;
                    <span className={Styles.el}>
                        0507-1334-8574
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            

            <div className={Styles.as}>
            
            <div className={Styles.imgList}>
                <ul id={Styles.num3}>
                <li>

                    <div className={Styles.screen}>
                    <a href="https://map.naver.com/p/search/%EC%88%A025/place/1764714162?c=15.00,0,0,0,dh&placePath=?entry%3Dbmp"
                        target="_blank" className={Styles.el}>
                        <span>
                        <img src={img5} />
                        </span>
                    </a>
                    </div>
                </li>
                </ul>
            </div>
            
            <div className={Styles.textArea}>
                <div className={Styles.sub}>
                <a href="#none">
                    <span className={Styles.ee}>
                    술 25
                    </span>
                </a>

                

                <ul className={Styles.sell}>
                    <li className={Styles.style}>&#x2B50;
                    <span className={Styles.el}>
                        <a href="https://map.naver.com/p/search/%EC%88%A025/place/1764714162?c=15.00,0,0,0,dh&placePath=?entry%3Dbmp" target="blank">
                        대전 서구 도안중로 311번길 11 102호
                        </a>
                    </span>
                    </li>
                    <li className={Styles.tel}>
                    &#x1F4F2;
                    <span className={Styles.el}>
                        010-2730-9289
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            

            <div className={Styles.as}>
            
            <div className={Styles.imgList}>
                <ul id={Styles.num3}>
                <li>

                    <div className={Styles.screen}>
                    <a href="https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EC%88%A0%EC%95%A0/place/1443501101?c=15.00,0,0,0,dh&isCorrectAnswer=true" target="_blank" className={Styles.el}>
                        <span>
                        <img src={img6} />
                        </span>
                    </a>
                    </div>
                </li>
                </ul>
            </div>
            
            <div className={Styles.textArea}>
                <div className={Styles.sub}>
                <a href="#none">
                    <span className={Styles.ee}>
                    우리술애
                    </span>
                </a>

                

                <ul className={Styles.sell}>
                    <li className={Styles.style}>&#x2B50;
                    <span className={Styles.el}>
                        <a href="https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EC%88%A0%EC%95%A0/place/1443501101?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                        target="blank">
                        경기 부천시 길주로 129 1층 102호
                        </a>
                    </span>
                    </li>
                    <li className={Styles.tel}>
                    &#x1F4F2;
                    <span className={Styles.el}>
                        0507-1461-3121
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            

            <div className={Styles.as}>
            
            <div className={Styles.imgList}>
                <ul id={Styles.num3}>
                <li>

                    <div className={Styles.screen}>
                    <a href="https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EC%88%A0%ED%9E%88%EC%96%B4%EB%A1%9C/place/1356779161?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                        target="_blank" className={Styles.el}>
                        <span>
                        <img src={img7} />
                        </span>
                    </a>
                    </div>
                </li>
            </ul>
            </div>
            
            <div className={Styles.textArea}>
                <div className={Styles.sub}>
                <a href="#none">
                    <span className={Styles.ee}>
                    우리술히어로
                    </span>
                </a>

                

                <ul className={Styles.sell}>
                    <li className={Styles.style}>&#x2B50;
                    <span className={Styles.el}>
                        <a href="https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EC%88%A0%ED%9E%88%EC%96%B4%EB%A1%9C/place/1356779161?c=15.00,0,0,0,dh&isCorrectAnswer=true" target="blank">
                        서울 송파구 백제고분로 411 1층 우리술히어로
                        </a>
                    </span>
                    </li>
                    <li className={Styles.tel}>
                    &#x1F4F2;
                    <span className={Styles.el}>
                        0507-1434-9071
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            

            <div className={Styles.as}>
            
            <div className={Styles.imgList}>
                <ul id={Styles.num3}>
                <li>

                    <div className={Styles.screen}>
                    <a href="https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EC%88%98%EC%9A%B8/place/1944270030?c=13.79,0,0,0,dh&isCorrectAnswer=true"
                        target="_blank" className={Styles.el}>
                        <span>
                        <img src={img8} />
                        </span>
                    </a>
                    </div>
                </li>
                </ul>
            </div>
            
            <div className={Styles.textArea}>
                <div className={Styles.sub}>
                <a href="#none">
                    <span className={Styles.ee}>
                    제주수울
                    </span>
                </a>

                

                <ul className={Styles.sell}>
                    <li className={Styles.style}>&#x2B50;
                    <span className={Styles.el}>
                        <a href="https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EC%88%98%EC%9A%B8/place/1944270030?c=13.79,0,0,0,dh&isCorrectAnswer=true"
                        target="blank">
                        제주 제주시 서문로 72-1 1층 제주수울
                        </a>
                    </span>
                    </li>
                    <li className={Styles.tel}>
                    &#x1F4F2;
                    <span className={Styles.el}>
                        0507-1419-3023
                    </span>
                    </li>
                </ul>
                </div>
            </div>  
            </div>
            

            <div className={Styles.as}>
            
            <div className={Styles.imgList}>
                <ul id={Styles.num3}>
                <li>

                    <div className={Styles.screen}>
                    <a href="https://map.naver.com/p/search/%EC%A3%BC%EB%A5%98%EC%82%AC%ED%9A%8C/place/1749025207?c=15.00,0,0,0,dh&isCorrectAnswer=true" target="_blank" className={Styles.el}>
                        <span>
                        <img src={img9} />
                        </span>
                    </a>
                    </div>
                </li>
                </ul>
            </div>
            
            <div className={Styles.textArea}>
                <div className={Styles.sub}>
                <a href="#none">
                    <span className={Styles.ee}>
                    주류사회
                    </span>
                </a>

                

                <ul className={Styles.sell}>
                    <li className={Styles.style}>&#x2B50;
                    <span className={Styles.el}>
                        <a href="https://map.naver.com/p/search/%EC%A3%BC%EB%A5%98%EC%82%AC%ED%9A%8C/place/1749025207?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                        target="blank">
                        서울 마포구 양화로 45 메세나폴리스 지하1층
                        </a>
                    </span>
                    </li>
                    <li className={Styles.tel}>
                    &#x1F4F2;
                    <span className={Styles.el}>
                        0507-1375-8139
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            
            <div className={Styles.as}>
            
                <div className={Styles.imgList}>
                <ul id={Styles.num3}>
                    <li>
                    <div className={Styles.screen}>
                        <a href="https://map.naver.com/p/search/%EC%98%A4%EB%8A%98%EC%88%A0/place/1034085197?c=16.71,0,0,0,dh&placePath=?entry%3Dbmp"
                            target="_blank" className={Styles.el}>
                        <span>
                        <img src={img10} />
                        </span>
                    </a>
                    </div>
                    </li>
                </ul>
                </div>
            
                <div className={Styles.textArea}>
                    <div className={Styles.sub}>
                        <a href="#none">
                            <span className={Styles.ee}>
                                오늘술
                            </span>
                        </a>
                        <ul className={Styles.sell}>
                            <li className={Styles.style}>&#x2B50;
                                <span className={Styles.el}>
                                    <a href="https://map.naver.com/p/search/%EC%98%A4%EB%8A%98%EC%88%A0/place/1034085197?c=16.71,0,0,0,dh&placePath=?entry%3Dbmp"
                                    target="blank">
                                        경기 과천시 관문로 130 과천1차종합상가 1F
                                    </a>
                                </span>
                                </li>
                                <li className={Styles.tel}>
                                    &#x1F4F2;
                                    <span className={Styles.el}>
                                        0507-1439-9102
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
            <br/>
            {/* 버튼 */}
            <p style={{textAlign: 'center', height:'100px', padding: '20px'}}>
                <button onclick="1" className={Styles.myBtn}>1</button>
                <button className={Styles.myBtn}>2</button>
                <button className={Styles.myBtn}>3</button> 
            </p>
            <br/>
        </article>



    </main>

}


export default Page;