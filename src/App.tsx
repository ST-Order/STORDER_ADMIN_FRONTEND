import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./Signup";
import MenuUpdate from "./Home/MenuUpdate";
import MenuNotice from "./Home/MenuNotice";
import NoticeList from "./Home/Notice/NoticeList";
import Order from "./Home/Order/Order";
import MenuRegister from "./Home/MenuRegister";
import NoticeRegister from "./Home/Notice/NoticeRegister";
import MenuSoldout from "./Home/MenuSoldout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Signin />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu-update" element={<MenuUpdate />} />
          <Route path="/menu-notice" element={<MenuSoldout />} />
          <Route path="/notice/register" element={<NoticeRegister />} />
          <Route path="/notice" element={<NoticeList />} />
          <Route path="/menu-update/register" element={<MenuRegister />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
