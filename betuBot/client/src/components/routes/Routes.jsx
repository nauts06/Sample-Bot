import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../authentication/Login";


const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
