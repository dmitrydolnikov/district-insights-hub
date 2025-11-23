import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Briefcase, DollarSign, Building2, Users, Award } from "lucide-react";
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const EconomicDevelopment = () => {
  const employmentTrend = [
    { month: "Jan", employed: 285400, unemployed: 8200 },
    { month: "Feb", employed: 287100, unemployed: 7900 },
    { month: "Mar", employed: 289300, unemployed: 7600 },
    { month: "Apr", employed: 291200, unemployed: 7300 },
    { month: "May", employed: 293500, unemployed: 7100 },
    { month: "Jun", employed: 295800, unemployed: 6800 },
  ];

  const smallBusinessGrowth = [
    { quarter: "Q1 '23", businesses: 12450, jobs: 48200 },
    { quarter: "Q2 '23", businesses: 12680, jobs: 49500 },
    { quarter: "Q3 '23", businesses: 12920, jobs: 50800 },
    { quarter: "Q4 '23", businesses: 13180, jobs: 52100 },
    { quarter: "Q1 '24", businesses: 13440, jobs: 53600 },
    { quarter: "Q2 '24", businesses: 13720, jobs: 55200 },
  ];

  const grantsByCategory = [
    { category: "Infrastructure", amount: 15.2 },
    { category: "Small Business", amount: 8.7 },
    { category: "Workforce Training", amount: 6.4 },
    { category: "Technology", amount: 5.8 },
    { category: "Green Energy", amount: 4.9 },
    { category: "Community Dev", amount: 3.5 },
  ];

  const medianIncome = [
    { year: "2019", income: 92400 },
    { year: "2020", income: 94200 },
    { year: "2021", income: 97800 },
    { year: "2022", income: 101200 },
    { year: "2023", income: 104600 },
    { year: "2024", income: 108300 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-7xl mx-auto pt-4 pb-8 px-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">Economic Development Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Regional economy, small business growth, and job creation metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Employment Rate"
            value="97.7%"
            subtitle="Labor force participation"
            icon={Users}
            trend={{ value: "0.5% increase YoY", positive: true }}
          />
          <MetricCard
            title="Small Businesses"
            value="13,720"
            subtitle="Active businesses"
            icon={Building2}
            trend={{ value: "280 new this quarter", positive: true }}
          />
          <MetricCard
            title="Jobs Created"
            value="3,240"
            subtitle="New positions YTD"
            icon={Briefcase}
            trend={{ value: "18% above target", positive: true }}
          />
          <MetricCard
            title="Median Income"
            value="$108.3K"
            subtitle="Household annual"
            icon={DollarSign}
            trend={{ value: "3.5% increase", positive: true }}
          />
          <MetricCard
            title="Grants Awarded"
            value="$44.5M"
            subtitle="Federal & state funding"
            icon={Award}
            trend={{ value: "$8.2M this quarter", positive: true }}
          />
          <MetricCard
            title="GDP Growth"
            value="4.2%"
            subtitle="Regional annual rate"
            icon={TrendingUp}
            trend={{ value: "Above regional avg", positive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Employment Trends</CardTitle>
              <CardDescription>Labor force participation over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={employmentTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => value.toLocaleString()} />
                  <Legend />
                  <Area type="monotone" dataKey="employed" stackId="1" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.6} name="Employed" />
                  <Area type="monotone" dataKey="unemployed" stackId="2" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.6} name="Unemployed" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Small Business Growth</CardTitle>
              <CardDescription>Business count and job creation</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={smallBusinessGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="businesses" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Businesses" />
                  <Line yAxisId="right" type="monotone" dataKey="jobs" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Jobs Created" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Grant Funding by Category</CardTitle>
              <CardDescription>Federal and state grants awarded (millions)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={grantsByCategory} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="category" width={120} />
                  <Tooltip formatter={(value) => `$${value}M`} />
                  <Bar dataKey="amount" fill="hsl(var(--chart-1))" name="Amount ($M)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Median Household Income</CardTitle>
              <CardDescription>Year-over-year income growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={medianIncome}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Line type="monotone" dataKey="income" stroke="hsl(var(--chart-3))" strokeWidth={3} name="Median Income" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EconomicDevelopment;
