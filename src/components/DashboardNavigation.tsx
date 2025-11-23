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
  side?: "left" | "right" | "both";
}

const DashboardNavigation = ({ previous, next, side = "both" }: DashboardNavigationProps) => {
  if (side === "left") {
    return (
      <div className="w-[72px] sm:w-[280px] flex justify-start">
        {previous ? (
          <Button variant="outline" size="sm" asChild className="!h-[60px] !w-[60px] !min-h-[60px] !min-w-[60px] p-0 sm:!h-9 sm:!w-auto sm:!min-h-9 sm:px-3 [&_svg]:!h-[48px] [&_svg]:!w-[48px] sm:[&_svg]:!h-4 sm:[&_svg]:!w-4">
            <Link to={previous.path} className="flex items-center justify-center">
              <ChevronLeft className="h-[48px] w-[48px] sm:h-4 sm:w-4" />
              <span className="hidden sm:inline ml-1.5">{previous.label}</span>
            </Link>
          </Button>
        ) : null}
      </div>
    );
  }

  if (side === "right") {
    return (
      <div className="w-[72px] sm:w-[280px] flex justify-end">
        {next ? (
          <Button variant="outline" size="sm" asChild className="!h-[60px] !w-[60px] !min-h-[60px] !min-w-[60px] p-0 sm:!h-9 sm:!w-auto sm:!min-h-9 sm:px-3 [&_svg]:!h-[48px] [&_svg]:!w-[48px] sm:[&_svg]:!h-4 sm:[&_svg]:!w-4">
            <Link to={next.path} className="flex items-center justify-center">
              <span className="hidden sm:inline mr-1.5">{next.label}</span>
              <ChevronRight className="h-[48px] w-[48px] sm:h-4 sm:w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    );
  }

  // Both sides - for pages with both buttons
  return (
    <>
      <div className="w-[72px] sm:w-[280px] flex justify-start">
        {previous ? (
          <Button variant="outline" size="sm" asChild className="!h-[60px] !w-[60px] !min-h-[60px] !min-w-[60px] p-0 sm:!h-9 sm:!w-auto sm:!min-h-9 sm:px-3 [&_svg]:!h-[48px] [&_svg]:!w-[48px] sm:[&_svg]:!h-4 sm:[&_svg]:!w-4">
            <Link to={previous.path} className="flex items-center justify-center">
              <ChevronLeft className="h-[48px] w-[48px] sm:h-4 sm:w-4" />
              <span className="hidden sm:inline ml-1.5">{previous.label}</span>
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="w-[72px] sm:w-[280px] flex justify-end">
        {next ? (
          <Button variant="outline" size="sm" asChild className="!h-[60px] !w-[60px] !min-h-[60px] !min-w-[60px] p-0 sm:!h-9 sm:!w-auto sm:!min-h-9 sm:px-3 [&_svg]:!h-[48px] [&_svg]:!w-[48px] sm:[&_svg]:!h-4 sm:[&_svg]:!w-4">
            <Link to={next.path} className="flex items-center justify-center">
              <span className="hidden sm:inline mr-1.5">{next.label}</span>
              <ChevronRight className="h-[48px] w-[48px] sm:h-4 sm:w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default DashboardNavigation;

