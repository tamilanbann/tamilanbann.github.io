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
import Header from "./components/header";
import { Dashboard } from "./components/dashboard-05";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <Dashboard /> */}
        <div className="h-screen  w-full">
          <Header />
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
