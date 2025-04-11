import { Dashboard } from "./pages/dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Frame from "./pages/Frame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/frame" element={<Frame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
