import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/login";
import ProfilePage from "./components/Profile";
import Drawer from "./components/Drawer";
import Message from "./components/Message";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Router>
        <Drawer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<Message />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <div className="App"></div>
      </Router>
    </div>
  );
}

export default App;
