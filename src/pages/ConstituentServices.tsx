import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, CheckCircle, TrendingUp, Clock } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ConstituentServices = () => {
  const casesByCategory = [
    { name: "Social Security", cases: 3200, color: "hsl(var(--chart-1))" },
    { name: "Veterans Affairs", cases: 2800, color: "hsl(var(--chart-2))" },
    { name: "Immigration", cases: 2100, color: "hsl(var(--chart-3))" },
    { name: "Medicare", cases: 1900, color: "hsl(var(--chart-4))" },
    { name: "IRS/Taxes", cases: 1500, color: "hsl(var(--chart-5))" },
    { name: "Other", cases: 1000, color: "hsl(var(--muted))" },
  ];

  const casesTrend = [
    { month: "Jan", cases: 950, resolved: 890 },
    { month: "Feb", cases: 1020, resolved: 945 },
    { month: "Mar", cases: 1100, resolved: 1050 },
    { month: "Apr", cases: 1050, resolved: 1020 },
    { month: "May", cases: 1150, resolved: 1100 },
    { month: "Jun", cases: 1200, resolved: 1150 },
  ];

  const recoveredFunds = [
    { quarter: "Q1", amount: 18.5 },
    { quarter: "Q2", amount: 22.3 },
    { quarter: "Q3", amount: 19.8 },
    { quarter: "Q4", amount: 19.4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-7xl mx-auto pt-4 pb-8 px-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">Constituent Services Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Tracking case resolutions, recovered funds, and service excellence metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Total Cases Closed"
            value="12,500"
            subtitle="Term to date"
            icon={CheckCircle}
            trend={{ value: "8.5% vs last term", positive: true }}
          />
          <MetricCard
            title="Funds Recovered"
            value="$79.8M"
            subtitle="Delayed/denied benefits"
            icon={DollarSign}
            trend={{ value: "$12.2M this quarter", positive: true }}
          />
          <MetricCard
            title="Resolution Rate"
            value="95.2%"
            subtitle="Cases successfully resolved"
            icon={TrendingUp}
            trend={{ value: "2.3% improvement", positive: true }}
          />
          <MetricCard
            title="Avg. Resolution Time"
            value="18 days"
            subtitle="Down from 24 days"
            icon={Clock}
            trend={{ value: "25% faster", positive: true }}
          />
          <MetricCard
            title="Active Cases"
            value="1,240"
            subtitle="Currently being processed"
            icon={Users}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cases by Category</CardTitle>
              <CardDescription>Distribution of constituent cases by service type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={casesByCategory}
                    dataKey="cases"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry) => `${entry.name}: ${entry.cases}`}
                  >
                    {casesByCategory.map((entry, index) => (
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
              <CardTitle>Monthly Case Volume & Resolution</CardTitle>
              <CardDescription>Cases opened vs. cases resolved over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={casesTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cases" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Cases Opened" />
                  <Line type="monotone" dataKey="resolved" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Cases Resolved" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Funds Recovered by Quarter</CardTitle>
              <CardDescription>Delayed and denied benefits successfully recovered for constituents</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={recoveredFunds}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis label={{ value: 'Millions ($)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `$${value}M`} />
                  <Legend />
                  <Bar dataKey="amount" fill="hsl(var(--chart-3))" name="Recovered Funds ($M)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConstituentServices;
