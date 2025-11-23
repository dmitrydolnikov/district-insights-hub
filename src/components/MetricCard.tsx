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
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-3xl font-bold text-foreground mt-2">{value}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
            {trend && (
              <p
                className={`text-sm font-medium mt-2 ${
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
