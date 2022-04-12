
import "../../Assets/Css/menu.css";



import Button from "./menu-btn"
import Logo from "../../Assets/Images/logo.jpeg"


export default function Menu(props) {



  return (

    <>
      <div className="menu-svg">
      <img src={Logo} alt="image not found" />
       
      </div>

      <div className="menu-bar ">
    
        <div className="Clglogo">
          <img src={Logo} alt="image not found" />
        </div>

        <div className="menu">
          <Button allbtn={props.menu} />

        </div>

      </div>





    </>


  );
}


