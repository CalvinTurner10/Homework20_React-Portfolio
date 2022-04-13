import React, {useEffect} from 'react';
import './css/bar.css'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <ul className="nav nav-tabs">
      <h1 className ="nav-tabs-header"> Calvin's Portfolio</h1>

      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Work')}
          // Check to see if the currentPage is `Work`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

// function NavTabs(props) {
//   const{
//     pages = [],
//     setCurrentPage,
//     currentPage,
//   } = props;

//   useEffect(()=>{
//     document.title =(currentPage.name);

//   },[currentPage]);
//   return (
//     <nav>
//       <ul className ="flex-row">
//         {pages.map((Page)=> (
//           <li className={`mx-5 ${
//             currentPage.name === Page.name && 'navActive'
//           }`}
//           key={Page.name}>
//             <span onclick={() =>setCurrentPage(Page)} >
//               {(Page.name)}
//             </span>
//             </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

export default NavTabs;
