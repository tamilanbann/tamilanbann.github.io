import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";

function App() {
  let [navbar, setNavbar] = useState({ open: false });
  return (
    <div className="App">
      <div className="h-20 md:h-20 ">
        <Header navbar={navbar} setNavbar={setNavbar} />
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
