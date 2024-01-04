import img1 from '../../i../../img/category3/category/Board.png';

import img3 from '../../img/category3/category3/공간 뒷동산.jpeg';
import img4 from '../../img/category3/category3/구들.jpg';
import img5 from '../../img/category3/category3/그 곁.jpg';
import img6 from '../../img/category3/category3/막걸리이야기.jpg';
import img7 from '../../img/category3/category3/미주류.jpg';
import img8 from '../../img/category3/category3/백곰 막걸리.jpg';
import img9 from '../../img/category3/category3/산울림.jpg';
import img10 from '../../img/category3/category3/안중도가.jpg';
import img11 from '../../img/category3/category3/정이주가.jpg';

import Styles from './page.module.css';


function Page2(){


    return   <main>


    <h1 id={Styles.h1}>전통주점</h1>

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
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/search/%EA%B3%B5%EA%B0%84%EB%92%B7%EB%8F%99%EC%82%B0/place/1182431824?c=15.00,0,0,0,dh&isCorrectAnswer=true"
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
                  공간 뒷동산
                </span>
              </a>

               

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://map.naver.com/p/search/%EA%B3%B5%EA%B0%84%EB%92%B7%EB%8F%99%EC%82%B0/place/1182431824?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                      target="blank">
                      서울 성북구 삼선교로2길 3
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    0507-1387-3977
                  </span>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      

        <div className={Styles.as}>
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/search/%EA%B5%AC%EB%93%A4/place/1810378110?c=15.00,0,0,0,dh&placePath=?entry%3Dbmp"
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
                  구들
                </span>
              </a>

               

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://app.catchtable.co.kr/ct/shop/goodle" target="blank">
                      서울 강남구 선릉로155길 26
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    010-7559-1592
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      

        <div className={Styles.as}>
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/search/%EA%B7%B8%EA%B3%81/place/1939388400?c=15.00,0,0,0,dh&isCorrectAnswer=true"
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
                  그 곁
                </span>
              </a>

               

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://app.catchtable.co.kr/ct/shop/g_gyeot" target="blank">
                      서울 송파구 오금로18길 14 1층
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    02-417-8666
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      

        <div className={Styles.as}>
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/search/%EB%A7%89%EA%B1%B8%EB%A6%AC%EC%9D%B4%EC%95%BC%EA%B8%B0/place/21607170?c=15.00,0,0,0,dh&placePath=?entry%3Dbmp"
                    target="_blank" className={Styles.el}>
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
                  막걸리이야기
                </span>
              </a>

               

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://map.naver.com/p/search/%EB%A7%89%EA%B1%B8%EB%A6%AC%EC%9D%B4%EC%95%BC%EA%B8%B0/place/21607170?c=15.00,0,0,0,dh&placePath=?entry%3Dbmp"
                      target="blank">
                      서울 서초구 사평대로28길 82
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    02-588-1516
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      

        <div className={Styles.as}>
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/search/%EB%AF%B8%EC%A3%BC%EB%A5%98/place/1331438803?c=15.00,0,0,0,dh&placePath=?entry%3Dbmp"
                    target="_blank" className={Styles.el}>
                    <span>
                      <img src={img7} style={{transform: 'translate(0%, -25%)'}}/>
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
                  미주류
                </span>
              </a>

               

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://map.naver.com/p/search/%EB%AF%B8%EC%A3%BC%EB%A5%98/place/1331438803?c=15.00,0,0,0,dh&placePath=?entry%3Dbmpt"
                      target="blank">
                      서울 광진구 면목로 31 1층
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    0507-1301-4864
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      

        <div className={Styles.as}>
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/entry/place/38010707?c=18.81,0,0,0,dh" target="_blank" className={Styles.el}>
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
                  백곰 막걸리
                </span>
              </a>
              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://map.naver.com/p/entry/place/38010707?c=18.81,0,0,0,dh" target="blank">
                      서울 강남구 압구정로48길 39
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    0507-1377-7644
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      

        <div className={Styles.as}>
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/search/%EC%82%B0%EC%9A%B8%EB%A6%BC1992/place/13123910?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                    target="_blank" className={Styles.el}>
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
                  산울림
                </span>
              </a>

               

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://app.catchtable.co.kr/ct/shop/sanullim1992" target="blank">
                      서울 마포구 서강로9길 60
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    0507-1417-0352
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      

        <div className={Styles.as}>
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/search/%EC%95%88%EC%A4%91%EB%8F%84%EA%B0%80/place/1554168813?c=15.00,0,0,0,dh&isCorrectAnswer=true"
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
                  안중도가
                </span>
              </a>
               

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://map.naver.com/p/search/%EC%95%88%EC%A4%91%EB%8F%84%EA%B0%80/place/1554168813?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                      target="blank">
                      부산 남구 전포대로 110 이층
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    051-714-6245
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      
        <div className={Styles.as}>
       
          <div class={Styles.imgList}>
            <ul id={Styles.num3}>
              <li>

                <div className={Styles.screen}>
                  <a href="https://map.naver.com/p/search/%EC%A0%95%EC%9D%B4%EC%A3%BC%EA%B0%80/place/1591243442?c=15.59,0,0,0,dh&isCorrectAnswer=true"
                    target="_blank" className={Styles.el}>
                    <span>
                      <img src={img11} /> 
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
                  정이주가
                </span>
              </a>

               

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://map.naver.com/p/search/%EC%A0%95%EC%9D%B4%EC%A3%BC%EA%B0%80/place/1591243442?c=15.59,0,0,0,dh&isCorrectAnswer=true"
                      target="blank">
                      광주 동구 제봉로 114 정이주가
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    0507-1306-8223
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

export default Page2;