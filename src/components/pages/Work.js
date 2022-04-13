import React from 'react';
import gen from '/Users/calvinturner/Desktop/bootcamp/homework20/Homework20_React-Portfolio/src/assets/Images/homework3.png'
import code from '/Users/calvinturner/Desktop/bootcamp/homework20/Homework20_React-Portfolio/src/assets/Images/code-refactor.png'
import quiz from '/Users/calvinturner/Desktop/bootcamp/homework20/Homework20_React-Portfolio/src/assets/Images/homework4.png'
import day from '/Users/calvinturner/Desktop/bootcamp/homework20/Homework20_React-Portfolio/src/assets/Images/homework5.png'

function Work() {
  return (
    <div>
    <div className = 'row'>
      <div className ='col-md-6'>
        {/* {section} */}
        <a href ="https://github.com/CalvinTurner10/Homework03_Javascript-Password-Generator" target ="_blank" title= "Password Generator"><h1>Password Generator</h1></a>
        <a href ="https://calvinturner10.github.io/Homework03_Javascript-Password-Generator/" target ="_blank" title= "Password Generator"><img src ={gen} alt= "Password Generator"/></a>
      </div>

      <div className ='col-md-6'>
        {/* {section} */}
        <a href ="https://github.com/CalvinTurner10/Homework01_HTML-CSS-Code-Refactor" target ="_blank" title= "Code-Refactor"><h1>Code-Refactor</h1></a>
        <a href ="https://calvinturner10.github.io/Homework01_HTML-CSS-Code-Refactor/" target ="_blank" title= "Code-Refactor"><img src ={code} alt= "Code-Refactor"/></a>
      {/* {section} */}
      </div>

    </div>
    <div className = 'row'>
    <div className ='col-md-6'>
        {/* {section} */}
        <a href ="https://github.com/CalvinTurner10/Homework04_Javascript-Code-Quiz" target ="_blank" title= "Code Quiz"><h1>Code Quiz"</h1></a>
        <a href ="https://calvinturner10.github.io/Homework04_Javascript-Code-Quiz/" target ="_blank" title= "Code Quiz"><img src ={quiz} alt= "Code Quiz"/></a>
        {/* {section} */}
      </div>
      <div className ='col-md-6'>
        {/* {section} */}
        <a href ="https://github.com/CalvinTurner10/Homework05_Day-Planner" target ="_blank" title= "Day Planner"><h1>Day Planner</h1></a>
        <a href ="https://calvinturner10.github.io/Homework05_Day-Planner/" target ="_blank" title= "Day Planner"><img src ={day} alt= "Day Planner"/></a>
      
      </div>


    
    </div>
    </div>
  );
}

export default Work;
