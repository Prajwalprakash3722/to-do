import {React,useState,} from "react";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import github from "./github.svg"
import "./App.css";
import logo from "./logo.svg";

const FooterPage = () => {
  const [count, setCount] = useState(0);
   return (
     <footer className="App-footer">
       <container className="footer-container">
         <h2 className="App-footer">Liked This?, Drop a Heart</h2>
       </container>
       <div className="footer-copyright text-center py-3">
         <h2 className="App-footer">This has been liked {count} times</h2>
         <Fab
           aria-label="like"
           onClick={() => setCount(count + 1)}
           color="secondary"
         >
           <FavoriteIcon />
         </Fab>{" "}
         <br />
         <container style={{ color: "white" }}>
           <p>
             &copy; 2021 Copyright {"   "} <a href="https://github.com/Prajwalprakash3722/to-do-app/blob/master/LICENSE" className="App-link"> @Prajwal Prakash. </a>
           </p>
           <p>
             {" "}
             <h3 className="App-footer">
               Have more features in mind or found a bug, you can contribute to the Github
               repositry.
               <a
                 href="https://github.com/Prajwalprakash3722/to-do-app"
                 target="blank"
               >
                 <img src={github} alt="Logo" className="App-logo-github" />
                 </a>
             </h3>
             <p>click the icon to head to the repositry</p>
           </p>
           <a
             href="https://prajwalprakash3722.github.io/prajwalsportfolio/"
             target="blank"
           >
             <img src={logo} alt="Logo" className="App-logo" />
           </a>
         </container>
       </div>
     </footer>
   );
};

export default FooterPage;
