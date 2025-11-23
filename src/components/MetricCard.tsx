import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

const MetricCard = ({ title, value, subtitle, icon: Icon, trend }: MetricCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="px-6 py-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-[1.5rem] font-bold text-muted-foreground">{title}</p>
            <h3 className="text-4xl sm:text-3xl font-bold text-foreground mt-[0.25rem]">{value}</h3>
            {subtitle && (
              <p className="text-[1.25rem] text-muted-foreground mt-[0.125rem]">{subtitle}</p>
            )}
            {trend && (
              <p
                className={`text-[1.5rem] font-medium mt-[0.25rem] ${
                  trend.positive ? "text-success" : "text-destructive"
                }`}
              >
                {trend.positive ? "↑" : "↓"} {trend.value}
              </p>
            )}
          </div>
          <div className="ml-4 p-3 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
