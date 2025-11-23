import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import DashboardNavigation from "@/components/DashboardNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Sun, Wind, TrendingDown, DollarSign, Building2 } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";

const CleanEnergy = () => {
  const projectsByType = [
    { type: "Residential Solar", projects: 1240, capacity: 8.6 },
    { type: "Commercial Solar", projects: 185, capacity: 12.4 },
    { type: "Community Solar", projects: 28, capacity: 5.2 },
    { type: "Wind Energy", projects: 12, capacity: 3.8 },
    { type: "Energy Storage", projects: 95, capacity: 2.1 },
    { type: "EV Charging", projects: 220, capacity: 1.8 },
  ];

  const emissionsReduction = [
    { year: "2019", emissions: 425000, target: 425000 },
    { year: "2020", emissions: 408000, target: 410000 },
    { year: "2021", emissions: 385000, target: 395000 },
    { year: "2022", emissions: 352000, target: 380000 },
    { year: "2023", emissions: 318000, target: 365000 },
  ];

  const iraTaxCredits = [
    { quarter: "Q1 2023", residential: 2.4, commercial: 3.8 },
    { quarter: "Q2 2023", residential: 3.1, commercial: 4.2 },
    { quarter: "Q3 2023", residential: 3.8, commercial: 5.1 },
    { quarter: "Q4 2023", residential: 4.2, commercial: 5.8 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-7xl mx-auto pt-4 pb-8 px-4">
        <div className="mb-6">
          <div className="flex items-start justify-center gap-4 mb-2">
            <DashboardNavigation side="left" previous={{ path: "/economic-development", label: "Economic Development" }} />
            <div className="flex-1 text-center max-w-4xl">
              <h1 className="text-4xl font-bold text-foreground mb-2">Clean Energy & Climate Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Tracking renewable energy projects, IRA tax credits, and emissions reductions
              </p>
            </div>
            <DashboardNavigation side="right" />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Clean Energy Projects"
            value="1,780"
            subtitle="Active installations"
            icon={Sun}
            trend={{ value: "28% increase this year", positive: true }}
          />
          <MetricCard
            title="Solar Capacity"
            value="26.2 MW"
            subtitle="Combined solar capacity"
            icon={Zap}
            trend={{ value: "5.8 MW added", positive: true }}
          />
          <MetricCard
            title="IRA Tax Credits"
            value="$18.9M"
            subtitle="Federal incentives claimed"
            icon={DollarSign}
            trend={{ value: "$4.2M this quarter", positive: true }}
          />
          <MetricCard
            title="Emissions Reduced"
            value="107K tons"
            subtitle="CO₂ equivalent YoY"
            icon={TrendingDown}
            trend={{ value: "25% below target", positive: true }}
          />
          <MetricCard
            title="Jobs Created"
            value="485"
            subtitle="Clean energy sector"
            icon={Building2}
            trend={{ value: "18% growth", positive: true }}
          />
          <MetricCard
            title="Energy Cost Savings"
            value="$8.2M"
            subtitle="Annual resident savings"
            icon={Wind}
            trend={{ value: "$1,850 avg per household", positive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Clean Energy Projects by Type</CardTitle>
              <CardDescription>Number of installations and capacity (MW)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectsByType}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" angle={-15} textAnchor="end" height={80} />
                  <YAxis yAxisId="left" label={{ value: 'Projects', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'MW', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="projects" fill="hsl(var(--chart-1))" name="Projects" />
                  <Bar yAxisId="right" dataKey="capacity" fill="hsl(var(--chart-3))" name="Capacity (MW)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IRA Tax Credits Claimed</CardTitle>
              <CardDescription>Quarterly residential and commercial incentives ($M)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={iraTaxCredits}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis label={{ value: 'Millions ($)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `$${value}M`} />
                  <Legend />
                  <Bar dataKey="residential" fill="hsl(var(--chart-2))" name="Residential ($M)" stackId="a" />
                  <Bar dataKey="commercial" fill="hsl(var(--chart-4))" name="Commercial ($M)" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Emissions Reduction</CardTitle>
              <CardDescription>Annual emissions (tons CO₂) vs reduction targets</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={emissionsReduction}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Tons CO₂', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `${(value as number).toLocaleString()} tons`} />
                  <Legend />
                  <Area type="monotone" dataKey="emissions" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.6} name="Actual Emissions" />
                  <Area type="monotone" dataKey="target" stroke="hsl(var(--chart-5))" fill="hsl(var(--chart-5))" fillOpacity={0.3} name="Target Emissions" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CleanEnergy;
