import React from "react";
import "./Components/style.css";
import Meal from "./Components/Meal";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import EditProfile from "./Views/EditProfile";
// import Login from "./Views/Login";
import SignUp from "./Views/SignUp";
import Home from "./Views/Home";


function App() {
  return (
    <BrowserRouter>
      <header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/editprofile" element={<EditProfile />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/meal" element={<Meal />} />
          </Routes>
        </div>
      </header>
    </BrowserRouter>  
  )
}

export default App;


// import React from "react";
// import Home from "./Views/Home";
// import Nav from "./Components/Nav";
// import Login from "./Views/Login";
// import SignUp from "./Views/SignUp";
// import "./App.css";
// import "./Components/style.css";
// import Meal from "./Components/Meal";

// import { Routes, Route, BrowserRouter } from "react-router-dom";

// export default function App() {
//   const getUserFromLocalStorage = () => {
//     const foundUser = localStorage.getItem("user");
//     if (foundUser) {
//       return JSON.parse(foundUser);
//     }
//     return {};
//   };

//   const [user, setUser] = useState(getUserFromLocalStorage());
//   const [cart, setCart] = useState([]);

//   const logMeIn = (user) => {
//     setUser(user);
//     localStorage.setItem("user", JSON.stringify(user));
//   };
//   const logMeOut = () => {
//     setUser({});
//     localStorage.removeItem("user");
//   };

//   return (
//     <BrowserRouter>
//       <div>
//         <Nav user={user} logMeOut={logMeOut} />
//       </div>
//       <header className="App-header">
//         <div>
//           {/* {BLOCK CONTENT} */}

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login logMeIn={logMeIn} />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/meal" element={<Meal />} />
//           </Routes>

//           {/* {BLOCK CONTENT} */}
//         </div>
//       </header>
//     </BrowserRouter>
//   );
// }
