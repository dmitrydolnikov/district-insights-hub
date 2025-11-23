import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Vote, MapPin, Calendar, Award } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const CivicEngagement = () => {
  const townHallsByYear = [
    { year: "2019", events: 18, attendance: 2850 },
    { year: "2020", events: 22, attendance: 3420 },
    { year: "2021", events: 24, attendance: 3680 },
    { year: "2022", events: 26, attendance: 4120 },
    { year: "2023", events: 25, attendance: 3950 },
  ];

  const legislationByTopic = [
    { topic: "National Security", bills: 28, color: "hsl(var(--chart-1))" },
    { topic: "Economic Development", bills: 34, color: "hsl(var(--chart-2))" },
    { topic: "Healthcare", bills: 42, color: "hsl(var(--chart-3))" },
    { topic: "Climate & Energy", bills: 31, color: "hsl(var(--chart-4))" },
    { topic: "Veterans Affairs", bills: 25, color: "hsl(var(--chart-5))" },
    { topic: "Other", bills: 18, color: "hsl(var(--muted))" },
  ];

  const votingRecord = [
    { category: "Defense & Security", votes: 85, withDistrict: 82 },
    { category: "Economy & Jobs", votes: 92, withDistrict: 88 },
    { category: "Healthcare", votes: 78, withDistrict: 75 },
    { category: "Environment", votes: 65, withDistrict: 63 },
    { category: "Veterans", votes: 72, withDistrict: 71 },
    { category: "Education", votes: 58, withDistrict: 56 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-7xl mx-auto pt-4 pb-8 px-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">Civic Engagement Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Tracking town halls, legislation, voting record, and community transparency
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Town Halls Held"
            value="115"
            subtitle="Total this term"
            icon={Users}
            trend={{ value: "Avg 23/year", positive: true }}
          />
          <MetricCard
            title="Total Attendance"
            value="18,020"
            subtitle="Community participants"
            icon={MapPin}
            trend={{ value: "3,604 avg per year", positive: true }}
          />
          <MetricCard
            title="Bills Sponsored"
            value="178"
            subtitle="Legislation introduced"
            icon={FileText}
            trend={{ value: "42 this session", positive: true }}
          />
          <MetricCard
            title="Votes Cast"
            value="450"
            subtitle="This legislative session"
            icon={Vote}
            trend={{ value: "98.2% attendance", positive: true }}
          />
          <MetricCard
            title="Community Events"
            value="342"
            subtitle="Community engagements"
            icon={Calendar}
            trend={{ value: "68 events this quarter", positive: true }}
          />
          <MetricCard
            title="Transparency Score"
            value="96%"
            subtitle="Public record accessibility"
            icon={Award}
            trend={{ value: "Top quartile ranking", positive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Town Hall Participation Trends</CardTitle>
              <CardDescription>Annual events and total attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={townHallsByYear}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" label={{ value: 'Events', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Attendance', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="events" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Events Held" />
                  <Line yAxisId="right" type="monotone" dataKey="attendance" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Total Attendance" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legislation by Topic</CardTitle>
              <CardDescription>Bills sponsored/co-sponsored by policy area</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={legislationByTopic}
                    dataKey="bills"
                    nameKey="topic"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={(entry) => `${entry.topic}: ${entry.bills}`}
                  >
                    {legislationByTopic.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Voting Record by Category</CardTitle>
              <CardDescription>Total votes and alignment with community priorities</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={votingRecord}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis label={{ value: 'Number of Votes', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="votes" fill="hsl(var(--chart-1))" name="Total Votes" />
                  <Bar dataKey="withDistrict" fill="hsl(var(--chart-3))" name="Aligned with Community" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CivicEngagement;
