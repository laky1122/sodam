import "./topButtonc.css";


function TopButton(){

    return  <div className="topbutton">
                <button onClick={function(e){
                window.scrollTo({ top: 0, behavior: "smooth" });
                }}>top</button>
            
            </div>

}

export default TopButton;