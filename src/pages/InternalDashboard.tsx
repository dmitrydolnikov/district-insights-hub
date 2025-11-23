import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Clock, Target, MessageSquare, BarChart3 } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const InternalDashboard = () => {
  const caseworkByWeek = [
    { week: "Week 1", new: 85, open: 340, closed: 78 },
    { week: "Week 2", new: 92, open: 354, closed: 85 },
    { week: "Week 3", new: 88, open: 357, closed: 82 },
    { week: "Week 4", new: 95, open: 370, closed: 90 },
  ];

  const issueSentiment = [
    { issue: "Housing", volume: 285, sentiment: 65 },
    { issue: "Healthcare", volume: 312, sentiment: 58 },
    { issue: "Economy", volume: 268, sentiment: 72 },
    { issue: "Immigration", volume: 195, sentiment: 48 },
    { issue: "Climate", volume: 178, sentiment: 68 },
    { issue: "Veterans", volume: 142, sentiment: 82 },
  ];

  const townHallMetrics = [
    { location: "Community Center A", attendance: 185, topics: 42, followUps: 38 },
    { location: "Library B", attendance: 220, topics: 55, followUps: 51 },
    { location: "Town Hall C", attendance: 165, topics: 38, followUps: 35 },
    { location: "Virtual Event", attendance: 142, topics: 31, followUps: 28 },
  ];

  const slaByCategory = [
    { category: "Veterans", avgDays: 14, target: 18, cases: 142 },
    { category: "Social Security", avgDays: 16, target: 20, cases: 218 },
    { category: "Immigration", avgDays: 22, target: 25, cases: 95 },
    { category: "Medicare", avgDays: 12, target: 15, cases: 168 },
    { category: "IRS", avgDays: 19, target: 22, cases: 124 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-7xl mx-auto pt-4 pb-8 px-4">
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Internal Use Only</AlertTitle>
          <AlertDescription>
            This dashboard contains non-public operational metrics for staff analysis and planning.
          </AlertDescription>
        </Alert>

        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">Internal Command Center</h1>
          <p className="text-lg text-muted-foreground">
            Constituent casework, issue monitoring, and operational analytics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Active Cases"
            value="370"
            subtitle="Currently in progress"
            icon={Target}
            trend={{ value: "8.8% above baseline", positive: false }}
          />
          <MetricCard
            title="Avg Resolution Time"
            value="16.2 days"
            subtitle="All categories combined"
            icon={Clock}
            trend={{ value: "18% faster than target", positive: true }}
          />
          <MetricCard
            title="Issue Volume"
            value="1,380"
            subtitle="Communications this month"
            icon={MessageSquare}
            trend={{ value: "12% increase", positive: true }}
          />
          <MetricCard
            title="SLA Compliance"
            value="94.8%"
            subtitle="Cases within target time"
            icon={TrendingUp}
            trend={{ value: "2.1% improvement", positive: true }}
          />
          <MetricCard
            title="Aging Cases"
            value="18"
            subtitle="Over 30 days old"
            icon={AlertCircle}
            trend={{ value: "Down from 25", positive: true }}
          />
          <MetricCard
            title="Town Hall Follow-ups"
            value="152"
            subtitle="Pending commitments"
            icon={BarChart3}
            trend={{ value: "89% completion rate", positive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Casework Pipeline</CardTitle>
              <CardDescription>Weekly new, open, and closed case volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={caseworkByWeek}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="new" stroke="hsl(var(--chart-1))" strokeWidth={2} name="New Cases" />
                  <Line type="monotone" dataKey="open" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Open Cases" />
                  <Line type="monotone" dataKey="closed" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Closed Cases" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Issue Sentiment & Volume</CardTitle>
              <CardDescription>Constituent communication topics and sentiment scores</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={issueSentiment}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="issue" />
                  <YAxis yAxisId="left" label={{ value: 'Volume', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Sentiment %', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="volume" fill="hsl(var(--chart-1))" name="Volume" />
                  <Bar yAxisId="right" dataKey="sentiment" fill="hsl(var(--chart-3))" name="Positive Sentiment %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>SLA Performance by Category</CardTitle>
              <CardDescription>Average resolution days vs target for each case type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={slaByCategory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" angle={-15} textAnchor="end" height={80} />
                  <YAxis label={{ value: 'Days', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="avgDays" fill="hsl(var(--chart-1))" name="Avg Days" />
                  <Bar dataKey="target" fill="hsl(var(--chart-5))" name="Target Days" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Town Hall Analytics</CardTitle>
              <CardDescription>Event attendance, topics raised, and follow-up commitments</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={townHallMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="location" angle={-15} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="attendance" fill="hsl(var(--chart-2))" name="Attendance" />
                  <Bar dataKey="topics" fill="hsl(var(--chart-3))" name="Topics Raised" />
                  <Bar dataKey="followUps" fill="hsl(var(--chart-4))" name="Follow-ups" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InternalDashboard;
