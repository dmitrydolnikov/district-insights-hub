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
      <div className="w-[72px] md:w-[280px] flex justify-start">
        {previous ? (
          <Button variant="outline" size="sm" asChild className="!h-[60px] !w-[60px] !min-h-[60px] !min-w-[60px] p-0 md:!h-9 md:!w-auto md:!min-h-9 md:px-3 [&_svg]:!h-[48px] [&_svg]:!w-[48px] md:[&_svg]:!h-4 md:[&_svg]:!w-4">
            <Link to={previous.path} className="flex items-center justify-center">
              <ChevronLeft className="h-[48px] w-[48px] md:h-4 md:w-4" />
              <span className="hidden md:inline ml-1.5">{previous.label}</span>
            </Link>
          </Button>
        ) : null}
      </div>
    );
  }

  if (side === "right") {
    return (
      <div className="w-[72px] md:w-[280px] flex justify-end">
        {next ? (
          <Button variant="outline" size="sm" asChild className="!h-[60px] !w-[60px] !min-h-[60px] !min-w-[60px] p-0 md:!h-9 md:!w-auto md:!min-h-9 md:px-3 [&_svg]:!h-[48px] [&_svg]:!w-[48px] md:[&_svg]:!h-4 md:[&_svg]:!w-4">
            <Link to={next.path} className="flex items-center justify-center">
              <span className="hidden md:inline mr-1.5">{next.label}</span>
              <ChevronRight className="h-[48px] w-[48px] md:h-4 md:w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    );
  }

  // Both sides - for pages with both buttons
  return (
    <>
      <div className="w-[72px] md:w-[280px] flex justify-start">
        {previous ? (
          <Button variant="outline" size="sm" asChild className="!h-[60px] !w-[60px] !min-h-[60px] !min-w-[60px] p-0 md:!h-9 md:!w-auto md:!min-h-9 md:px-3 [&_svg]:!h-[48px] [&_svg]:!w-[48px] md:[&_svg]:!h-4 md:[&_svg]:!w-4">
            <Link to={previous.path} className="flex items-center justify-center">
              <ChevronLeft className="h-[48px] w-[48px] md:h-4 md:w-4" />
              <span className="hidden md:inline ml-1.5">{previous.label}</span>
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="w-[72px] md:w-[280px] flex justify-end">
        {next ? (
          <Button variant="outline" size="sm" asChild className="!h-[60px] !w-[60px] !min-h-[60px] !min-w-[60px] p-0 md:!h-9 md:!w-auto md:!min-h-9 md:px-3 [&_svg]:!h-[48px] [&_svg]:!w-[48px] md:[&_svg]:!h-4 md:[&_svg]:!w-4">
            <Link to={next.path} className="flex items-center justify-center">
              <span className="hidden md:inline mr-1.5">{next.label}</span>
              <ChevronRight className="h-[48px] w-[48px] md:h-4 md:w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default DashboardNavigation;
