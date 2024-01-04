import React,{useEffect, useRef, useState} from "react";
// import axios from 'axios';
import WeatherResult from "./weatherResult";

function Weather(){

    let [date,setdate] = useState(new Date());


    // useEffect(()=>{
    //     var datesetting = setInterval(() => tick(), 1000);

    //     return () => clearInterval(datesetting);
    // });

    // function tick(){
    //     setdate(new Date());
    // }


    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    // const initialBaseDate = year.substring(2) + month + day;
  
    // const [baseDate, setBaseDate] = useState(initialBaseDate);
    // const [baseTime, setBaseTime] = useState(date.toLocaleTimeString('ko-KR', {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Seoul'}).replace(/:/g, ''));
    
    //화면출력용
    const dateid = useRef(year + "년 " + month + "월 " + day + "일");
    //화면출력용
    const timeprint = useRef(date.toLocaleTimeString('ko-KR', {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Seoul'}));
    //api전달용
    //const timeid = useRef(date.toLocaleTimeString('ko-KR', {hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Seoul'}).replace(/:/g, ''));

    const place = useRef("");



    
    const resultRef = useRef("");
    //----------------------------------------------------

    return <main>

        <h2>날씨로 알아보는 우리술 추천</h2>

        <article> 
        <hr/>
            <p style={{textAlign:'end'}}>
                {dateid.current} {timeprint.current} 기준
            </p>
            <br/>
            <p style={{textAlign:'center'}}>
                <div style={{display:'inline-block', width:'70px',textAlign:'start', paddingRight:'30px'}}>지역 선택</div>

                
                <select id="place" ref={place} style={{width:'100px'}}>
                    <option value="서울" selected>서울</option>
                    <option value="부산">부산</option>
                    <option value="인천">인천</option>
                </select>
                
                <button style={{margin:'0 20px', padding: '2px 6px'}} onClick={()=>
                    {
                        let nx_ny;
                        switch(place.current.value){
                            case 'seoul':
                                
                                nx_ny = ['61','125'];
                                break;
                            case 'busan': 
                                
                                nx_ny = ['97','74'];
                                break;
                            case 'incheon':
                               
                                nx_ny = ['55','125'];
                                break;
                            
                        }
                        //------------------------
                        
                        
                        // axios.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0', {
                        // params: {
                        //     serviceKey: '', // 서비스 키 추가
                        //     pageNo: '1',
                        //     numOfRows: '1000',
                        //     dataType: 'JSON',
                        //     baseDate: baseDate,
                        //     baseTime: baseTime,
                        //     nx: nx_ny[0],
                        //     ny: nx_ny[1],
                        // }
                        // })
                        // .then(response => {
                        //     console.log(response.data);
                        //     resultRef.current = JSON.stringify(response.data);
                        // })
                        // .catch(error => {
                        //     console.error('데이터를 불러오는 중 에러 발생:', error);
                        // });
                        

                
                    }
                }>검색하기</button>
                
            </p>

            <WeatherResult
                place={place.current.value}
            />
        </article>

    </main>




}

export default Weather;