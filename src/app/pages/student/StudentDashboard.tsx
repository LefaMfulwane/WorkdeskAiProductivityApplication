import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { BookOpen, MessageSquare, FileEdit, TrendingUp, Award, Flame, Target } from "lucide-react";
import { Link } from "react-router";
import { Progress } from "../../components/ui/progress";

export default function StudentDashboard() {
  const quickActions = [
    {
      icon: BookOpen,
      title: "AI Study Hub",
      description: "Study guides, quizzes, and more",
      href: "/dashboard/student/study-hub",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot",
      description: "Get help with homework and questions",
      href: "/dashboard/student/chatbot",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileEdit,
      title: "AI Humanizer",
      description: "Paraphrase and refine your writing",
      href: "/dashboard/student/humanizer",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Ready to ace your studies? 🎓
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your personalized learning dashboard. Let's make progress today!
        </p>
      </div>

      {/* Gamification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              Study Streak
            </CardDescription>
            <CardTitle className="text-3xl text-orange-600">7 days</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Keep it up! You're on fire 🔥
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-500" />
              Quiz Score Average
            </CardDescription>
            <CardTitle className="text-3xl text-blue-600">85%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="mr-1 h-4 w-4" />
              <span>+5% improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Award className="h-4 w-4 text-purple-500" />
              Badges Earned
            </CardDescription>
            <CardTitle className="text-3xl text-purple-600">12</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next: Quiz Master (15 quizzes)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Study Readiness */}
      <Card>
        <CardHeader>
          <CardTitle>Study Readiness</CardTitle>
          <CardDescription>Your overall preparation level</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Mathematics</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Physics</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Chemistry</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
        </CardContent>
      </Card>

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
                <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-purple-200 dark:hover:border-purple-800">
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
            AI tools are here to help you learn, not to replace your own thinking. Always verify
            AI-generated content and use these tools to supplement—not substitute—your studies.
            Academic integrity is your responsibility.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
