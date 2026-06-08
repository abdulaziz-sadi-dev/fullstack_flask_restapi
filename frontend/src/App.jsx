import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Signup } from "./pages/Signup";
import { LoginPage } from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
