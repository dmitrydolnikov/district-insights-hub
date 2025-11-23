import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardNavigationProps {
  previous?: {
    path: string;
    label: string;
  };
  next?: {
    path: string;
    label: string;
  };
  side?: "left" | "right";
}

const DashboardNavigation = ({ previous, next, side = "both" }: DashboardNavigationProps) => {
  if (side === "left") {
    return (
      <div className="w-[120px] sm:w-[180px] flex justify-start">
        {previous ? (
          <Button variant="outline" size="sm" asChild>
            <Link to={previous.path} className="flex items-center gap-1.5">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{previous.label}</span>
            </Link>
          </Button>
        ) : null}
      </div>
    );
  }

  if (side === "right") {
    return (
      <div className="w-[120px] sm:w-[180px] flex justify-end">
        {next ? (
          <Button variant="outline" size="sm" asChild>
            <Link to={next.path} className="flex items-center gap-1.5">
              <span className="hidden sm:inline">{next.label}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    );
  }

  // Both sides - for pages with both buttons
  return (
    <>
      <div className="w-[120px] sm:w-[180px] flex justify-start">
        {previous ? (
          <Button variant="outline" size="sm" asChild>
            <Link to={previous.path} className="flex items-center gap-1.5">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{previous.label}</span>
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="w-[120px] sm:w-[180px] flex justify-end">
        {next ? (
          <Button variant="outline" size="sm" asChild>
            <Link to={next.path} className="flex items-center gap-1.5">
              <span className="hidden sm:inline">{next.label}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default DashboardNavigation;

