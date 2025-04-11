import { Dashboard } from "./pages/dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frame from "./pages/Frame"; // ✅ Tumhara front page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />} /> {/* ✅ Front page route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
