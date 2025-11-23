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
      className={`px-2 py-2 text-[1.15rem] font-medium transition-colors hover:text-primary whitespace-normal text-center flex-1 leading-tight relative ${
        location.pathname === item.path
          ? "text-primary border-b-2 border-primary/60"
          : "text-muted-foreground"
      } ${item.isInternal ? "font-bold" : ""}`}
    >
      {item.label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex py-1 md:py-2 items-center gap-2 md:gap-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-primary whitespace-normal">
          <Building2 className="h-9 w-9 flex-shrink-0" />
          <span className="hidden sm:inline text-[1.3rem]">District Insights Hub</span>
        </Link>
        
        {/* Desktop Navigation - items wrap text internally but stay on one line */}
        <nav className="ml-auto hidden md:flex flex-1 items-center justify-evenly max-w-[calc(100vw-200px)] lg:max-w-none">
          <div className="flex items-center justify-evenly w-full">
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
            <Button variant="ghost" className="!h-[72px] !w-[72px] !min-h-[72px] !min-w-[72px] p-0 md:!h-10 md:!w-10 md:!min-h-10 md:!min-w-10 [&_svg]:!h-[57px] [&_svg]:!w-[57px] md:[&_svg]:!h-6 md:[&_svg]:!w-6">
              <Menu className="h-[57px] w-[57px] md:h-6 md:w-6" />
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
