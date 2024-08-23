import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import One from "./components/One";
import Three from "./components/Three";
import Two from "./components/Two";
import Body from "./components/Body";
import Error from "./components/Error";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
