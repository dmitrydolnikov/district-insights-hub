import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import DashboardNavigation from "@/components/DashboardNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, DollarSign, TrendingDown, Activity, Pill } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Healthcare = () => {
  const enrollmentTrend = [
    { year: "2019", aca: 28500, medicare: 42300, medicaid: 35200 },
    { year: "2020", aca: 31200, medicare: 43800, medicaid: 38500 },
    { year: "2021", aca: 34800, medicare: 45200, medicaid: 41200 },
    { year: "2022", aca: 37500, medicare: 46800, medicaid: 43800 },
    { year: "2023", aca: 41200, medicare: 48500, medicaid: 45900 },
  ];

  const programDistribution = [
    { name: "ACA Marketplace", enrolled: 41200, color: "hsl(var(--chart-1))" },
    { name: "Medicare", enrolled: 48500, color: "hsl(var(--chart-2))" },
    { name: "Medicaid", enrolled: 45900, color: "hsl(var(--chart-3))" },
    { name: "CHIP", enrolled: 8400, color: "hsl(var(--chart-4))" },
    { name: "VA Healthcare", enrolled: 6200, color: "hsl(var(--chart-5))" },
  ];

  const prescriptionSavings = [
    { quarter: "Q1", avgCost: 285, savings: 42 },
    { quarter: "Q2", avgCost: 268, savings: 59 },
    { quarter: "Q3", avgCost: 252, savings: 75 },
    { quarter: "Q4", avgCost: 238, savings: 89 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-7xl mx-auto pt-4 pb-8 px-4">
        <div className="mb-6">
          <div className="flex items-start justify-center gap-4 mb-2">
            <DashboardNavigation side="left" previous={{ path: "/housing", label: "Housing & Affordability" }} />
            <div className="flex-1 text-center max-w-4xl">
              <h1 className="text-4xl font-bold text-foreground mb-2">Healthcare Access Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Tracking ACA enrollment, Medicare/Medicaid coverage, and prescription cost reduction
              </p>
            </div>
            <DashboardNavigation side="right" next={{ path: "/civic-engagement", label: "Civic Engagement" }} />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Total Covered"
            value="150,200"
            subtitle="Residents with coverage"
            icon={Users}
            trend={{ value: "9.2% increase YoY", positive: true }}
          />
          <MetricCard
            title="ACA Enrollment"
            value="41,200"
            subtitle="Marketplace coverage"
            icon={Heart}
            trend={{ value: "9.9% growth this year", positive: true }}
          />
          <MetricCard
            title="Medicare Beneficiaries"
            value="48,500"
            subtitle="Including Part D"
            icon={Activity}
            trend={{ value: "3.6% increase", positive: true }}
          />
          <MetricCard
            title="Medicaid Coverage"
            value="45,900"
            subtitle="Low-income support"
            icon={Users}
            trend={{ value: "4.8% expansion", positive: true }}
          />
          <MetricCard
            title="Rx Cost Reduction"
            value="$89"
            subtitle="Avg. monthly savings"
            icon={Pill}
            trend={{ value: "112% improvement", positive: true }}
          />
          <MetricCard
            title="Uninsured Rate"
            value="4.2%"
            subtitle="Down from 6.8%"
            icon={TrendingDown}
            trend={{ value: "38% reduction", positive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Healthcare Coverage Distribution</CardTitle>
              <CardDescription>Current enrollment by program type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={programDistribution}
                    dataKey="enrolled"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry) => `${entry.name}: ${entry.enrolled.toLocaleString()}`}
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
              <CardTitle>Prescription Cost Trends</CardTitle>
              <CardDescription>Average costs and quarterly savings per beneficiary</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={prescriptionSavings}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis label={{ value: 'Dollars ($)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                  <Bar dataKey="avgCost" fill="hsl(var(--chart-1))" name="Avg Monthly Cost ($)" />
                  <Bar dataKey="savings" fill="hsl(var(--chart-3))" name="Monthly Savings ($)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Coverage Enrollment Growth</CardTitle>
              <CardDescription>Five-year trend across major healthcare programs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={enrollmentTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Enrollees', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="aca" stroke="hsl(var(--chart-1))" strokeWidth={2} name="ACA Marketplace" />
                  <Line type="monotone" dataKey="medicare" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Medicare" />
                  <Line type="monotone" dataKey="medicaid" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Medicaid" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
