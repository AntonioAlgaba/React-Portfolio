import React from "react";
import Photo from "../../assets/Photo.jpg";

function Home () {
    return (
        <div >
          
            <h1>Hi There!!</h1>
            <img src= {Photo} alt="Photo" style={{height: "200px", width: "200px", borderRadius: "20px", marginLeft:"20px"}}/>
        </div>
    )
}

export default Home