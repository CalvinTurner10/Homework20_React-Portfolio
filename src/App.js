import React, {useState} from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import './components/css/style.css'

// import NavTabs from "./components/NavTabs";
// import Pages from "./components/pages";
// import "./components/css/style.css";

// import Footer from "./components/pages/footer";
// import Header from "./components/pages/header";

// const App = () => {
//   const [pages] = useState([
//     {
//       name: " About",
//     },
//     {
//       name: " Work",
//     },
//     {
//       name: " Contact",
//     },
//     {
//       name: " Resume",
//     },
//   ]);

//   const [currentPage, setCurrentPage] = useState(pages[0]);

//   return (
//     <div>
//       <Header>
//         <NavTabs
//           pages={pages}
//           setCurrentPage={setCurrentPage}
//           currentPage={currentPage}
//         ></NavTabs>
//       </Header>
//       <main>
//         < Pages currentPage={currentPage}></Pages>
//       </main>
//       <Footer />
//     </div>
//   );
// };
const App = () => <PortfolioContainer/>;

export default App;
