import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { MainContent } from "./pages/MainContent";

import { Foro } from "./components/Foro";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { User } from "./pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Header />}>
            <Route path="/" element={<MainContent type="inicio" />} />
            <Route path="plantas" element={<MainContent type="plantas" />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="user" element={<User />} />
            <Route element={<PrivateRoutes />}>
              <Route path="foro" element={<Foro />} />
            </Route>
          </Route>

          {/* <Route element={<PrivateRoutes />}>
            <Route path="/ships-list" element={<ShipsList />} />
            <Route path="/ships-list/:shipId" element={<Ship />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
