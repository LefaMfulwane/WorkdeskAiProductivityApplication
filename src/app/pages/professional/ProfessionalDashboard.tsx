import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Mail, FileText, Calendar, Search, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";

export default function ProfessionalDashboard() {
  const quickActions = [
    {
      icon: Mail,
      title: "Email Generator",
      description: "Create professional emails instantly",
      href: "/dashboard/professional/email",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Meeting Notes",
      description: "Summarize and organize your meetings",
      href: "/dashboard/professional/meeting-notes",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Task Planner",
      description: "AI-powered scheduling and planning",
      href: "/dashboard/professional/task-planner",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Search,
      title: "Research Assistant",
      description: "Deep dive into any topic",
      href: "/dashboard/professional/research",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot",
      description: "Ask anything, get instant answers",
      href: "/dashboard/professional/chatbot",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your productivity command center. Choose a tool to get started.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Emails Generated</CardDescription>
            <CardTitle className="text-3xl">24</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="mr-1 h-4 w-4" />
              <span>+12% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Tasks Completed</CardDescription>
            <CardTitle className="text-3xl">47</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="mr-1 h-4 w-4" />
              <span>+8% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Time Saved</CardDescription>
            <CardTitle className="text-3xl">15h</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="mr-1 h-4 w-4" />
              <span>+25% from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.href} to={action.href}>
                <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-blue-200 dark:hover:border-blue-800">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* AI Disclaimer */}
      <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            ⚠️ Responsible AI Usage
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 dark:text-gray-300">
          <p>
            AI-generated content should be reviewed before use. While our tools strive for accuracy,
            they may occasionally produce incorrect or biased information. Always verify important details
            and use your professional judgment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
