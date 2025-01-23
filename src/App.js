import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Alldoctor from "./pages/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import SignUP from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NavBar from "./component/form/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-docters" element={<Alldoctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
