import React from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import JavaScript from "../../assets/JavaScript.png";
import jquery from "../../assets/jquery.png";
import react from "../../assets/react.png"
import bootstrap from "../../assets/bootstrap.png"
import node from "../../assets/node.png"
import './Home.css'

function Home () {
    return (
        <div>
            <h2>Hi! I'm Antonio</h2>
            <p>Future front end developer with a passion for coding and learning new and challenging things</p>
            <h2 className="skills">SKILLS</h2>
            <div className='logos'>
                <img src={html} className='logo'></img>
                <img src={css} className='logo'></img>
                <img src={JavaScript} className='logo'></img>
                <img src={jquery} className='logo'></img>
                <img src={react} className='logo'></img>
                <img src={bootstrap} className='logo'></img>
                <img src={node} className='logo'></img>
            </div>
        </div>
    )
}

export default Home