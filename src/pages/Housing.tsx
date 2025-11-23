import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, DollarSign, Users, TrendingUp, Building, Key } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Housing = () => {
  const affordabilityTrend = [
    { year: "2019", medianRent: 1250, medianIncome: 68000, affordableUnits: 2100 },
    { year: "2020", medianRent: 1295, medianIncome: 69500, affordableUnits: 2350 },
    { year: "2021", medianRent: 1380, medianIncome: 71200, affordableUnits: 2580 },
    { year: "2022", medianRent: 1485, medianIncome: 73800, affordableUnits: 2890 },
    { year: "2023", medianRent: 1550, medianIncome: 76500, affordableUnits: 3140 },
  ];

  const programDistribution = [
    { name: "Section 8 Vouchers", families: 1850, color: "hsl(var(--chart-1))" },
    { name: "Public Housing", families: 980, color: "hsl(var(--chart-2))" },
    { name: "First-Time Buyer", families: 745, color: "hsl(var(--chart-3))" },
    { name: "Emergency Rental", families: 620, color: "hsl(var(--chart-4))" },
    { name: "Other HUD Programs", families: 425, color: "hsl(var(--chart-5))" },
  ];

  const assistanceByQuarter = [
    { quarter: "Q1", applications: 450, approved: 385 },
    { quarter: "Q2", applications: 520, approved: 445 },
    { quarter: "Q3", applications: 485, approved: 410 },
    { quarter: "Q4", applications: 550, approved: 475 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-7xl mx-auto pt-4 pb-8 px-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">Housing & Affordability Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Tracking affordable housing investments, rental assistance, and homeownership programs
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Affordable Units"
            value="3,140"
            subtitle="Affordable housing units"
            icon={Home}
            trend={{ value: "8.6% increase YoY", positive: true }}
          />
          <MetricCard
            title="Rental Assistance"
            value="4,620"
            subtitle="Families receiving support"
            icon={Users}
            trend={{ value: "12% more than last year", positive: true }}
          />
          <MetricCard
            title="HUD Investments"
            value="$42.8M"
            subtitle="Federal funding secured"
            icon={DollarSign}
            trend={{ value: "$8.2M this year", positive: true }}
          />
          <MetricCard
            title="First-Time Buyers"
            value="745"
            subtitle="Homeownership assistance"
            icon={Key}
            trend={{ value: "18% increase", positive: true }}
          />
          <MetricCard
            title="Rent Burden Relief"
            value="62%"
            subtitle="Below 30% income threshold"
            icon={TrendingUp}
            trend={{ value: "5% improvement", positive: true }}
          />
          <MetricCard
            title="New Construction"
            value="285"
            subtitle="Affordable units this year"
            icon={Building}
            trend={{ value: "45 units ahead of target", positive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Housing Assistance Programs</CardTitle>
              <CardDescription>Distribution of families by program type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={programDistribution}
                    dataKey="families"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry) => `${entry.name}: ${entry.families}`}
                  >
                    {programDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rental Assistance Applications</CardTitle>
              <CardDescription>Quarterly application and approval rates</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={assistanceByQuarter}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="applications" fill="hsl(var(--chart-1))" name="Applications" />
                  <Bar dataKey="approved" fill="hsl(var(--chart-3))" name="Approved" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Housing Affordability Trends</CardTitle>
              <CardDescription>Median rent, income, and affordable unit availability over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={affordabilityTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" label={{ value: 'Dollars ($)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Units', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="medianRent" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Median Rent ($)" />
                  <Line yAxisId="right" type="monotone" dataKey="affordableUnits" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Affordable Units" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Housing;
