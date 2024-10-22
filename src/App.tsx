import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Order from "./Home/Order";
import MenuUpdate from "./Home/MenuUpdate";
import MenuNotice from "./Home/MenuNotice";
import Notice from "./Home/Notice";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu-update" element={<MenuUpdate />} />
          <Route path="/menu-notice" element={<MenuNotice />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
