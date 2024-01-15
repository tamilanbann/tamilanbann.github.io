import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";

function App() {
  let [navbar, setNavbar] = useState({ open: false });
  useEffect(() => {
    document.body.style.overflow = navbar.open ? "hidden" : "auto";
  }, [navbar]);
  return (
    <div className={`App`}>
      <div className="relative">
        <div className=" h-20 md:h-20 ">
          <Header navbar={navbar} setNavbar={setNavbar} />
        </div>

        <div>
          <AboutMe />
          <WorkExperience />
          {/* <Projects /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
