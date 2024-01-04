import Styles from './pp2.module.css';
import img1 from '../../img/category3/category/Board.png';
import img2 from '../../img/category3/category/크로우디(온라인).png';
import img3 from '../../img/category3/category/짠.jpg';
import img4 from '../../img/category3/category/제주술(온라인).png';
import img5 from '../../img/category3/category/전통주애(온라인).png';
import img6 from '../../img/category3/category/우리술한잔(온라인).jpg';
import img7 from '../../img/category3/category/우리술상회(온라인매장).jpg';
import img8 from '../../img/category3/category/우리술방(온라인).png';
import img9 from '../../img/category3/category/술샘몰(온라인).png';
import img10 from '../../img/category3/category/술담화(온라인).png';
function Pp(){



    return <main className={Styles.main}>

    <h1 id={Styles.h1}>온라인 판매처</h1>

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
                    <img src={img1}  id={Styles.board}/>
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
                  <a href="https://crowdystore.com/" target="_blank" className={Styles.el}>
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
                  크라우디 스토어
                </span>
              </a>

      


            <ul className={Styles.sell}>
              <li className={Styles.style}>&#x2B50;
                <span className={Styles.el}>
                  <a href="https://crowdystore.com/" target="blank">
                    https://crowdystore.com/
                  </a>
                </span>
              </li>
              <li className={Styles.tel}>
                &#x1F4F2;
                <span className={Styles.el}>
                  031-8039-5569
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
                  <a href="https://zzann.cafe24.com/skin-skin15/index.html" target="_blank" className={Styles.el}>
                    <span>
                      <img src={img3} /> 
                  </span >
                </a>
              </div>
            </li>
          </ul>
        </div>

          <div className={Styles.textArea}>
            <div className={Styles.sub}>
              <a href="#none">
                <span className={Styles.ee}>
                  짠!
                </span>
              </a>

  

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://zzann.co.kr/" target="blank">
                      https://zzann.co.kr/
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    010-2592-2348
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
                  <a href="https://jejusuul.com/" target="_blank" className={Styles.el}>
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
                  제주수울
                </span>
              </a>

     

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://jejusuul.com/" target="blank">
                      https://jejusuul.com/
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
                  <a href="https://soollove.com/" target="_blank" className={Styles.el}>
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
                  전통주애
                </span>
              </a>

              

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://soollove.com/" target="blank">
                      https://soollove.com/
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    070-7017-4717
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
                  <a href="https://oneshotkorea.net/index.net" target="_blank" className={Styles.el}>
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
                  우리술한잔
                </span>
              </a>

    

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://oneshotkorea.net/index.net" target="blank">
                      https://oneshotkorea.net
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    02-333-0901
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
                  <a href="https://smartstore.naver.com/woorisulgallery" target="_blank" className={Styles.el}>
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
                  우리술상회
                </span>
              </a>


              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://smartstore.naver.com/woorisulgallery" target="blank">
                      https://smartstore.naver.com
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    010-2249-1603
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
                  <a href="http://woorisoolbang.com/" target="_blank" className={Styles.el}>
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
                  우리술방
                </span>
              </a>

    

              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="http://woorisoolbang.com/" target="blank">
                      http://woorisoolbang.com/
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    010-3347-5817
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
                  <a href="https://sulseam.co.kr/main/index" target="_blank" className={Styles.el}>
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
                  술샘몰
                </span>
              </a>

              
              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://sulseam.co.kr/main/index" target="blank">
                      https://sulseam.co.kr/
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    010-2250-3431
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
                  <a href="https://www.sooldamhwa.com/damhwaMarket" target="_blank" className={Styles.el}>
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
                  술담화
                </span>
              </a>



              <ul className={Styles.sell}>
                <li className={Styles.style}>&#x2B50;
                  <span className={Styles.el}>
                    <a href="https://www.sooldamhwa.com/damhwaMarket" target="blank">
                      https://www.sooldamhwa.com
                    </a>
                  </span>
                </li>
                <li className={Styles.tel}>
                  &#x1F4F2;
                  <span className={Styles.el}>
                    070-5014-1282
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

export default Pp;
