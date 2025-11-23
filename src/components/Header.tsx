import { Link, useLocation } from "react-router-dom";
import { Building2 } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/constituent-services", label: "Constituent Services" },
    { path: "/national-security", label: "National Security" },
    { path: "/economic-development", label: "Economic Development" },
    { path: "/housing", label: "Housing" },
    { path: "/healthcare", label: "Healthcare" },
    { path: "/clean-energy", label: "Clean Energy" },
    { path: "/civic-engagement", label: "Civic Engagement" },
    { path: "/internal", label: "Internal" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-semibold text-primary">
          <Building2 className="h-6 w-6" />
          <span className="hidden sm:inline">District Insights Hub</span>
        </Link>
        <nav className="ml-auto flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
