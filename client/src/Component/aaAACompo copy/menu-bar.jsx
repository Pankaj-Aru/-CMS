


import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from "react-bootstrap";
import "../Assets/Css/menu.css";
import "../Assets/Css/login-btn.css";
import logo from "../Assets/Images/pro-1.jpg" 
import {Container,Navbar } from "react-bootstrap"
import { Link, Redirect, useHistory  } from 'react-router-dom';

import MenuButton from "./menu-btn"


export default function MenuBar(props) {


  return (

    <> 

<div className="menu-bar">
   <div className="logo">
   here logo
      </div>
       <div className="menu">
 <button><MenuButton/></button>
 
    
      </div>
    
      </div>





    </>


  );
}


