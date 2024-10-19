import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
