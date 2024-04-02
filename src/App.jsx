import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { MainContent } from "./pages/MainContent";
import { LoginSignup } from "./pages/LoginSignup";
import { Foro } from "./components/Foro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Header />}>
            <Route path="/" element={<MainContent type="inicio" />} />
            <Route path="plantas" element={<MainContent type="plantas" />} />
            <Route path="login" element={<LoginSignup type="login" />} />
            <Route path="signup" element={<LoginSignup type="signup" />} />
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
