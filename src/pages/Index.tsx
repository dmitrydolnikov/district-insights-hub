import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, TrendingUp, ArrowRight, Home, Heart, Zap, FileText, BarChart3 } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const topics = [
    {
      icon: Users,
      title: "Constituent Services",
      description: "Track case resolutions, recovered funds, and service excellence metrics demonstrating government that works.",
      stats: ["12,500+ cases closed", "$80M in recovered funds", "95.2% resolution rate"],
      link: "/constituent-services",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "National Security & Military",
      description: "Monitor military personnel support, veteran services, and cyber/AI workforce initiatives. Focus on pay, housing, childcare, and spouse employment.",
      stats: ["Personnel oversight", "Veteran services", "Cyber workforce modernization"],
      link: "/national-security",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description: "Analyze district economy, small business growth, and job creation. Supporting economic opportunity through data-driven insights.",
      stats: ["BLS data integration", "SBA metrics", "Local grant tracking"],
      link: "/economic-development",
      color: "text-success",
    },
    {
      icon: Home,
      title: "Housing & Affordability",
      description: "Track affordable housing investments, rental assistance programs, and first-time homeownership initiatives.",
      stats: ["3,140 affordable units", "4,620 families assisted", "$42.8M HUD funding"],
      link: "/housing",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Monitor ACA enrollment, Medicare/Medicaid coverage, and prescription cost reduction efforts.",
      stats: ["150,200 residents covered", "41,200 ACA enrollments", "$89 avg Rx savings"],
      link: "/healthcare",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Clean Energy & Climate",
      description: "Track renewable energy projects, IRA tax credits, and carbon emissions reduction progress.",
      stats: ["1,780 clean energy projects", "$18.9M tax credits", "107K tons CO₂ reduced"],
      link: "/clean-energy",
      color: "text-success",
    },
    {
      icon: FileText,
      title: "Civic Engagement",
      description: "View town halls, legislation tracking, voting record transparency, and community involvement.",
      stats: ["115 town halls held", "178 bills sponsored", "96% transparency score"],
      link: "/civic-engagement",
      color: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Internal Dashboard",
      description: "Staff command center for casework management, issue monitoring, and operational analytics (internal use only).",
      stats: ["Real-time metrics", "Issue sentiment tracking", "SLA performance"],
      link: "/internal",
      color: "text-muted-foreground",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-6 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                District Insights Hub
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-1">
                Data-driven insights for constituent services, national security, and economic development.
              </p>
              <p className="text-[1.15rem] text-muted-foreground">
                Comprehensive analytics across key priorities for government transparency and accountability
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/constituent-services">
                  Explore Dashboards <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="pt-6 pb-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Our Focus Areas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => (
              <Card key={topic.title} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 flex flex-col">
                <CardHeader className="flex-grow">
                  <Link to={topic.link} className="flex items-start gap-3 mb-4 group cursor-pointer">
                    <div className={`p-3 bg-primary/10 rounded-lg flex-shrink-0 ${topic.color} group-hover:bg-primary/20 transition-colors`}>
                      <topic.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl flex-1 group-hover:text-primary transition-colors">{topic.title}</CardTitle>
                  </Link>
                  <CardDescription className="text-lg mt-2">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-2 flex-grow">
                    {topic.stats.map((stat) => (
                      <li key={stat} className="text-[1.15rem] text-muted-foreground flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Data-Driven Government That Works
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            This prototype demonstrates how transparent data analytics can enhance constituent services,
            improve oversight, and drive better outcomes through data-driven governance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
