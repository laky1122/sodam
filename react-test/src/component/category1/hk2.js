import React,{ useState, useEffect  } from "react";
import './hk.css';
import './2st.css';
import tab1img from "../../img/category1/내용1.jpg"
import tab2img from "../../img/category1/내용2.jpg"
import tab3img from "../../img/category1/내용3.jpg"
import tab4img from "../../img/category1/내용4.jpg"


function Hk2() {
    const [selectedTab, setSelectedTab] = useState("tab1");

    const changeTab = (tabId) => {
      setSelectedTab(tabId);
      const queryString = new URLSearchParams(window.location.search);
      queryString.set('tab', tabId);
      const url = `${window.location.pathname}?${queryString.toString()}`;
      window.history.replaceState(null, '', url);
    };
    
    useEffect(() => {
      const queryString = new URLSearchParams(window.location.search);
      const tabId = queryString.get('tab');
      if (tabId && (tabId === 'tab1' || tabId === 'tab2' || tabId === 'tab3' || tabId === 'tab4')) {
        setSelectedTab(tabId);
      }
    }, []);
   
    return (
        <>
    
    
    
    <main>
        <article>
          <div id="content">
            <div className="inner">
              <h2 className="title">우리술의 종류</h2>

              <div className="cont-img cont-kinds">
                <div className="text-wrap">
                  <strong>한국 전통주는</strong>
                  <p>
                    {" "}
                    일반적으로 탁주, 약주, 소주로 분류된다. 상표에 표기되는
                    주종은 주세법에 명시된 일반 주류의 분류에 따라 탁주, 약주,
                    과실주, 소주, 일반 증류주, 리큐르, 기타 주류로 표시된다.
                  </p>
                </div>
              </div>
            </div>

            <div className="tab-wrap">
              <div>
                <ul className="tab kinds-tab">
                  <li
                    className={
                      selectedTab === "tab1"
                        ? "tab-menu1 selected"
                        : "tab-menu1"
                    }
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => changeTab("tab1")}
                    >
                      <span>탁주</span>
                    </a>
                  </li>
                  <li
                    className={
                      selectedTab === "tab2"
                        ? "tab-menu2 selected"
                        : "tab-menu2"
                    }
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => changeTab("tab2")}
                    >
                      <span>약·청주</span>
                    </a>
                  </li>
                  <li
                    className={
                      selectedTab === "tab3"
                        ? "tab-menu3 selected"
                        : "tab-menu3"
                    }
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => changeTab("tab3")}
                    >
                      <span>증류주</span>
                    </a>
                  </li>
                  <li
                    className={
                      selectedTab === "tab4"
                        ? "tab-menu4 selected"
                        : "tab-menu4"
                    }
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => changeTab("tab4")}
                    >
                      <span>기타주류</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                {selectedTab === "tab1" && (
                  <div id="tab1">
                    <div className="kinds-box">
                      <div className="hktabimg">
                        <img alt="" className="desktop" src={tab1img} />
                      </div>
                    </div>
                    <div className="Gridtext">
                      <div className="desctab1">탁주</div>
                      <div className="text1">
                        곡류(쌀, 밀, 보리 등) 원료에 국(누룩, 입국 등)과 물을
                        섞어 일정한 온도에서 발효시킨 술덧을 체 등으로 걸러
                        제조한 술이다. '탁하게 빚은 술'이라고 하여 탁주, '방금
                        막 거른 술'이라고하여 막걸리라고도 한다. 탁주의 주원료는
                        멥쌀, 밀누룩 그리고 물이다. 멥쌀 고두밥을 찐 뒤에 이를
                        식혀서 물과 함께 빻은 누룩을 비벼 항아리에 담는다.
                        항아리를 25도 전후의 따뜻한 곳에 놓아두면 술이 발효되기
                        시작하여 빠르게는 4~5일 만에, 더디게는 7~8일 만에
                        완성된다.
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === "tab2" && (
                  <div id="tab2">
                    <div className="kinds-box">
                      <div className="img">
                        <img alt="" className="desktop" src={tab2img} />
                      </div>
                    </div>
                    <div className="Gridtext">
                      <div className="desctab2">약·청주</div>
                      <div className="text1">
                        막걸리와 같은 방식으로 술을 빚고 발효시킨 술덧에서
                        술지게미를 걸러내어 맑게 만든 술이다.<br></br>
                        곡류 중 쌀을 원료로 하고 누룩을 1% 이상 사용하면 약주,
                        1% 미만을 사용하면 일본 사케 방식인 청주라고 한다.
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === "tab3" && (
                  <div id="tab3">
                    <div className="kinds-box">
                      <div className="img">
                        <img alt="" className="desktop" src={tab3img} />
                      </div>
                    </div>
                    <div className="Gridtext">
                      <div className="desctab3">증류주</div>
                      <div className="text1">
                        막걸리, 약주, 청주와 같은 발효주를 증류하여 만든 술로,
                        주세법상의 증류식소주, 일반 증류주, 리큐르 등이 있다.
                        <br></br>
                        대표적인 한국 증류주인 소주는 '불로 익혀 만든 진한
                        술'이라는 뜻으로, 곡물을 발효시켜 증류한 술인 증류식
                        소주와 주정을 물에 희석하여 제조한 희석식 소주가 있다.
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === "tab4" && (
                  <div id="tab4">
                    <div className="kinds-box">
                      <div className="img">
                        <img alt="" className="desktop" src={tab4img} />
                      </div>
                    </div>
                    <div className="Gridtext">
                      <div className="desctab4">기타주류</div>
                      <div className="text1">
                        주세법상의 주정, 발효주류, 증류주류에 속하지 않는 주류를
                        총칭한다.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
        </>
      );
    };

export default Hk2;