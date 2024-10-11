import React from "react";
import { cn } from "@/lib/utils";
import { Menu, Package2 } from "lucide-react";
import { Button } from "@ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@ui/sheet";

import GitHub from "./github";
import { ThemeToggle } from "./theme-toggle";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(" flex  flex-col w-full", className)}>
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 dark:bg-black dark:text-white">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <a href="#" className="text-foreground transition-colors ">
          Tamilanban Nakkeeran
        </a>
        <a href="#" className=" transition-colors ">
          profile
        </a>
        <a href="#" className=" transition-colors ">
          workExperience
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 inline-flex  md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="md:hidden ">
          <nav className="grid gap-6 text-lg font-medium  ">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Tamilanban Nakkeeran
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              profile
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              workExperience
            </a>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex items-end gap-4 ml-auto md:gap-2 lg:gap-4">
        <GitHub />

        <ThemeToggle />
      </div>
    </header>
  </div>
));

export { Header };
