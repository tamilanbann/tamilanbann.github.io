import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardDemo } from "./components/CardDemo";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard-05";
import { Profile } from "./components/Profile";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <Dashboard /> */}
        <div className="w-full min-w-[375px] min-h-screen p-3">
          <Header />

          <div className="flex flex-col min-w-[350px] m-1 ">
            <Profile className="min-w-full  m-1  self-start " />
            <WorkExperience className="min-w-full  m-1  self-start" />
            <Education className="min-w-full m-1   self-start" />
          </div>
        </div>
        {/* <div>
          <Button>Click me</Button>
          <ThemeToggle />
        </div>
        <CardDemo /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
