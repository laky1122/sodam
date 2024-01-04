import { useLocation } from 'react-router-dom';
import Styles from "./post.module.css";
import jsonData from './data.json';

import C2post0 from './postdata/c2post0';
import C2post1 from './postdata/c2post1';
import C2post2 from './postdata/c2post2';
import C2post3 from './postdata/c2post3';
import C2post4 from './postdata/c2post4';
import C2post5 from './postdata/c2post5';
import C2post6 from './postdata/c2post6';
import C2post7 from './postdata/c2post7';
import C2post8 from './postdata/c2post8';

/* <li>           
<b>이전 글</b>
<Link to={jsonprev.index} id="prev">{jsonprev.title}</Link>
</li>
<li>
<b>다음 글</b>
<Link to={jsonnext.index} id="next">{jsonnext.title}</Link>
</li> */


function Post(){
    const location = useLocation();
    const index = new URLSearchParams(location.search).get("index");
    const index1 = eval(index - 1);

    const json = jsonData[index1];

    const jsonprev = index1 > 0 ? jsonData[index1-1] : {index:"javascript:void(0)", title:"이전 글이 없습니다."};
    const jsonnext = index < jsonData.length ? jsonData[index1+1] : {index:"javascript:void(0)", title:"다음 글이 없습니다."};

    document.title = json.title +" | 소담";

    function back(){
        window.location.href = './';
    }

    //img넣을때 .postimg
    //table넣을때 .posttable
    return  (<main style={{textAlign: 'center'}} className={Styles.post}> 
            
        <article>
            <br/>
            <h3 id={Styles.title} style={{marginBottom: 0}}>{json.title}</h3>
            <h5 id={Styles.date} >{json.date}</h5>
            <hr/>
        </article>

  
        <article id="content">
           {index == 1 ? <C2post0/> : null}
           {index == 2 ? <C2post1/> : null}
           {index == 3 ? <C2post2/> : null}
           {index == 4 ? <C2post3/> : null}
           {index == 5 ? <C2post4/> : null}
           {index == 6 ? <C2post5/> : null}
           {index == 7 ? <C2post6/> : null}
           {index == 8 ? <C2post7/> : null}
           {index == 9 ? <C2post8/> : null}
        </article>

        <article>
            <hr/>
            <ul id={Styles.page}>
                <li>
                    <b>이전 글</b>
                    <a href={jsonprev.index} id="prev">{jsonprev.title}</a>
                </li>
                <li>
                    <b>다음 글</b>
                    <a href={jsonnext.index} id="next">{jsonnext.title}</a>
                </li>
            </ul>
            <hr/>
        </article>


        <article>
            <input type="button" value="리스트 보기" onClick={back}/>
        </article>

    </main>);
}


export default Post;