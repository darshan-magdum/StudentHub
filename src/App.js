import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from './Screens/Intro';
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
// import UserDashboard from "./Screens/UserDashboard";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        {/* <Route path="/UserDashboard" element={<UserDashboard />} /> */}
 
      </Routes>
    </div>
  </Router>
  );
}

export default App;
