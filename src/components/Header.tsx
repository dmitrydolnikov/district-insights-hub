import { Link, useLocation } from "react-router-dom";
import { Building2, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Group 1: Services & Engagement (direct constituent services)
  const servicesGroup = [
    { path: "/constituent-services", label: "Constituent Services" },
    { path: "/housing", label: "Housing" },
    { path: "/healthcare", label: "Healthcare" },
    { path: "/civic-engagement", label: "Civic Engagement" },
  ];

  // Group 2: Policy & Operations (broader policy areas and internal tools)
  const policyGroup = [
    { path: "/national-security", label: "National Security" },
    { path: "/economic-development", label: "Economic Development" },
    { path: "/clean-energy", label: "Clean Energy" },
    { path: "/internal", label: "Internal", isInternal: true },
  ];

  const NavLink = ({ item }: { item: { path: string; label: string; isInternal?: boolean } }) => (
    <Link
      to={item.path}
      onClick={() => setMobileMenuOpen(false)}
      className={`px-3 py-2 text-[1.15rem] font-medium transition-colors hover:text-primary ${
        location.pathname === item.path
          ? "text-primary"
          : "text-muted-foreground"
      } ${item.isInternal ? "font-bold" : ""}`}
    >
      {item.label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-semibold text-primary">
          <Building2 className="h-6 w-6" />
          <span className="hidden sm:inline">District Insights Hub</span>
        </Link>
        
        {/* Desktop Navigation - scrollable on medium screens */}
        <nav className="ml-auto hidden md:flex gap-1 items-center overflow-x-auto scrollbar-hide max-w-[calc(100vw-200px)] lg:max-w-none">
          <div className="flex gap-1 items-center min-w-max">
            {/* Group 1: Services & Engagement */}
            {servicesGroup.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
            {/* Divider between groups */}
            <div className="h-6 w-px bg-border mx-2 flex-shrink-0" />
            {/* Group 2: Policy & Operations */}
            {policyGroup.map((item) => (
              <NavLink key={item.path} item={item} />
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon" className="h-12 w-12 md:h-10 md:w-10">
              <Menu className="h-12 w-12 md:h-6 md:w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {/* Group 1: Services & Engagement */}
              {servicesGroup.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
              {/* Divider between groups */}
              <div className="h-px bg-border my-2" />
              {/* Group 2: Policy & Operations */}
              {policyGroup.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
