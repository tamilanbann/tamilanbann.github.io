import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { AboutMe } from "./components/AboutMe";
import { WorkExperience } from "./components/WorkExperience";
import { Project } from "./components/Project";
import { Section } from "./models/models";

function App() {
  const sections = [
    new Section("profile", useRef()),
    new Section("workExperience", useRef()),
  ];
  let [navbar, setNavbar] = useState({ open: false });

  useEffect(() => {
    document.body.style.overflow = navbar.open ? "hidden" : "auto";
  }, [navbar]);
  return (
    <div className={`App`}>
      <div className="relative">
        <div className=" h-20 md:h-20 ">
          <Header navbar={navbar} setNavbar={setNavbar} sections={sections} />
        </div>

        <div>
          <AboutMe componentRef={sections[0].ref} />
          <WorkExperience componentRef={sections[1].ref} />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
