import "../../Assets/Css/menu.css";

import { Link, Redirect, useHistory } from 'react-router-dom';

export default function MenuButton(props) {


    return (

        <>
            {props.allbtn.map((item, index) => {
                const ref = `#${item}`;
                return (
                    <div className="menu-btn" key={index} ><a href={ref}>{item}</a></div>
                );
            })
            }
        </>






        //     {/* <div className="menu-btn"><button>Menus</button></div> */ }
        //     {/* below from gloassphormisnm
        // <div class="tab"><a href="#home">Home</a></div>*/}



    );
}










