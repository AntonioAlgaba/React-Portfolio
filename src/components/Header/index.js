import React from "react";
import "./style.css";
import image from '../../assets/Photo.jpg'

function Header() {
  return (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
       <h1 className="display-4">Antonio Algaba Osuna</h1>
       <img src={image} alt="avatar of russell coleman" className="photo"></img>    
  </div>
</div>
  );
}

export default Header;