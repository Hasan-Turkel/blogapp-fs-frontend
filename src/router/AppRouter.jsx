import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
// import PrivateRouter from "./PrivateRouter"
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import MyBlogs from "../pages/MyBlogs";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="my-blogs" element={<MyBlogs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
