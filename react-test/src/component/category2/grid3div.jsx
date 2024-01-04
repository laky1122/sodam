import Styles from "./news.module.css";
import { Link } from "react-router-dom";


function Grid3div(props){
    const { img, title, date, href} = props;
    return <Link to={href}>
        <div className={[Styles.box,Styles.gridimg].join(" ")}>
            <img src={img} alt="사진"/>
        </div>
        <h4 style={{marginBottom: 0}}>{title}</h4>
        <i style={{fontSize:10}}>{date}</i>
    </Link>
}

export default Grid3div;