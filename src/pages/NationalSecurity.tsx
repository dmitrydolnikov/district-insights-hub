import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import DashboardNavigation from "@/components/DashboardNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Home, Baby, Briefcase, Cpu } from "lucide-react";
import { BarChart, Bar, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const NationalSecurity = () => {
  const militaryPersonnelMetrics = [
    { category: "Pay & Compensation", score: 82, fullMark: 100 },
    { category: "Housing", score: 75, fullMark: 100 },
    { category: "Childcare", score: 68, fullMark: 100 },
    { category: "Spouse Employment", score: 71, fullMark: 100 },
    { category: "Healthcare", score: 85, fullMark: 100 },
    { category: "Education Benefits", score: 88, fullMark: 100 },
  ];

  const veteranServices = [
    { month: "Jan", cases: 280, resolved: 265 },
    { month: "Feb", cases: 295, resolved: 280 },
    { month: "Mar", cases: 310, resolved: 298 },
    { month: "Apr", cases: 305, resolved: 295 },
    { month: "May", cases: 320, resolved: 310 },
    { month: "Jun", cases: 335, resolved: 325 },
  ];

  const cyberWorkforce = [
    { program: "AI/ML Training", enrolled: 145, completed: 112 },
    { program: "Cybersecurity", enrolled: 220, completed: 195 },
    { program: "Cloud Computing", enrolled: 180, completed: 158 },
    { program: "Data Analytics", enrolled: 165, completed: 142 },
    { program: "Network Security", enrolled: 198, completed: 175 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container max-w-7xl mx-auto pt-4 pb-8 px-4">
        <div className="mb-6">
          <div className="flex items-start justify-center gap-4 mb-2">
            <DashboardNavigation side="left" previous={{ path: "/civic-engagement", label: "Civic Engagement" }} />
            <div className="flex-1 text-center max-w-4xl">
              <h1 className="text-4xl font-bold text-foreground mb-2">National Security & Military Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Personnel oversight, veteran services, and cyber workforce modernization
              </p>
            </div>
            <DashboardNavigation side="right" next={{ path: "/economic-development", label: "Economic Development" }} />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Active Military Personnel"
            value="3,240"
            subtitle="Active personnel"
            icon={Users}
            trend={{ value: "2.1% increase", positive: true }}
          />
          <MetricCard
            title="Veterans Served"
            value="1,845"
            subtitle="This fiscal year"
            icon={Shield}
            trend={{ value: "15% more than last year", positive: true }}
          />
          <MetricCard
            title="Housing Support"
            value="465"
            subtitle="Families assisted"
            icon={Home}
          />
          <MetricCard
            title="Childcare Programs"
            value="12"
            subtitle="Base locations supported"
            icon={Baby}
            trend={{ value: "3 new this year", positive: true }}
          />
          <MetricCard
            title="Spouse Employment"
            value="89%"
            subtitle="Placement rate"
            icon={Briefcase}
            trend={{ value: "5% improvement", positive: true }}
          />
          <MetricCard
            title="Cyber Training"
            value="908"
            subtitle="Personnel trained"
            icon={Cpu}
            trend={{ value: "22% increase", positive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Military Personnel Support Metrics</CardTitle>
              <CardDescription>Assessment scores across key support areas (out of 100)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={militaryPersonnelMetrics}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Support Score" dataKey="score" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Veteran Services Case Volume</CardTitle>
              <CardDescription>Monthly veteran assistance cases</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={veteranServices}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cases" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Cases Opened" />
                  <Line type="monotone" dataKey="resolved" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Cases Resolved" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Cyber & AI Workforce Modernization</CardTitle>
              <CardDescription>Training program enrollment and completion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cyberWorkforce}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="program" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="enrolled" fill="hsl(var(--chart-1))" name="Enrolled" />
                  <Bar dataKey="completed" fill="hsl(var(--chart-3))" name="Completed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NationalSecurity;
