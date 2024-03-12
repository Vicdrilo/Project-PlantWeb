import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
