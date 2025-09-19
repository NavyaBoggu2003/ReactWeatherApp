// import Counter from "./components/Counter";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./Footer";
// import Banner from "./Banner";
// import Row from "./components/Row";
// import Headbar from "./components/Headbar";
// import SideNav from "./components/SideNav";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";

// function  App(){
//     return(
//     <div>
        {/* <Headbar/>
      <SideNav/> */}

          {/* <Header/>
          {/* <Main/> */}
          {/* <h1>Hello,React</h1>
          <p>Welcome to my first react project</p>
          <Navbar/>
          <Counter/>  */}
          {/* <Banner/>
          <Row/>
          <Footer/> */ }
          {/* <Login/> */}
          {/* <Dashboard/> */}
          // </div>
   
  //   ) ;
  // }

// export default App;
// import { useState } from "react";
// import SideNav from "./components/SideNav";
// import Headbar from "./components/Headbar";
// //  import Dashboard from "./components/Dashboard";
// import Attendance from "./components/Attendance";
// import "./App.css";
// function App() {
//       const [isSidebarOpen,setIsSidebarOpen]=useState(true);
//     const toggleSidebar=()=>{
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//   return (

//         <div className="app-container">
//        <Headbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
      
//       <div className="main-layout">
//         {isSidebarOpen && <SideNav/>}

//         <div className="content">
             {/* <Dashboard/> */}
                          //  <Attendance/> 

            {/* <h1>Welcome to Dashboard</h1>
          <p>This is my First React</p> */}
import Grandchild from "./components/Grandchild";
//         </div>
//       </div> 

//     </div>

//   );
// }

// import "./App.css";
// import Home from "./components/Home";
// import About from "./components/About";
// import Work from "./components/Work";
// import Testimonial from "./components/Testimonial";
// import Contact from "./components/Contact";
// import Foot from "./components/Foot";
// import Counting from "./components/Counting";
// import Timer from "./components/Timer";
// import Parent from "./components/Parent";
// import { useState } from "react";
// import Context from "./Context";
import WeatherApp from "./components/WeatherApp";
function App() {
  // const[user]=useState({name:'navya',age:30});
  return (
    // <div className="App">
    <div>
      {/* <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Foot/> */}
      {/* <Counting/>
      <Timer/> */}
      {/* <Parent user={user}/> */}
      {/* <Context/> */}
      <WeatherApp/>
    </div>
  );
}

export default App;
