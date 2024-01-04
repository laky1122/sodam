import './categoryHeader.css';


function CategoryHeader(props){
    const {title} = props;
    return     <main className="c">
                    <p>{title}</p>
                </main>

}

export default CategoryHeader;