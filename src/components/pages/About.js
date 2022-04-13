import React from "react";
import me from "../../../src/assets/Images/me.jpg"

 function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-5">
            <img className= "me-img" src ={me} alt= "all me" align="left"/>
              {/* </div> */}
          {/* <div className ="col-xs-5"> */}
            <h1 className ="me-header"> About</h1>
            <p>
              Technical Support Engineer at a startup in Atlanta. His background
              is providing outstanding customer support, great communication
              skills, upgrading/configuring operating systems & antivirus
              software programs. He is fueled by his passion for understanding
              the nuances of new technology and software. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Placeat voluptates numquam
              rerum quidem nisi quia eligendi inventore obcaecati quasi, magnam
              error aspernatur incidunt magni dicta dolor et? Deserunt, fugiat
              soluta!
            </p>
          </div>
        </div>
      </div>
  </div>
  );
}

export default About;