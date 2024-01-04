import Styles from "./news.module.css";
import Grid3div from "./grid3div.jsx"
import jsonData from './data.json';



function Grid3(){
    const data = jsonData;

    return <div className={Styles.grid3} id={Styles.c2grid}>
      {data.map((item,index) => (
        <Grid3div
            key = {index}
            img = {item.img}
            title = {item.title}
            date = {item.date}
            href= {item.index}
        />
      ))}
    </div>
}


export default Grid3;