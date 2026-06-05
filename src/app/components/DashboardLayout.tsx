import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "../../lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  Mail,
  FileText,
  Calendar,
  Search,
  BookOpen,
  FileEdit,
  ClipboardList,
  User,
  Settings,
  Menu,
  X,
  Moon,
  Sun,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "professional" | "student";
  userName?: string;
}

export default function DashboardLayout({ children, userType, userName = "John Doe" }: DashboardLayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const professionalNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/professional" },
    { icon: MessageSquare, label: "AI Chatbot", href: "/dashboard/professional/chatbot" },
    { icon: Mail, label: "Email Generator", href: "/dashboard/professional/email" },
    { icon: FileText, label: "Meeting Notes", href: "/dashboard/professional/meeting-notes" },
    { icon: Calendar, label: "Task Planner", href: "/dashboard/professional/task-planner" },
    { icon: Search, label: "Research Assistant", href: "/dashboard/professional/research" },
    { icon: FileEdit, label: "CV & Cover Letter", href: "/dashboard/professional/cv-builder" },
    { icon: ClipboardList, label: "Deadline Planner", href: "/dashboard/professional/deadline-planner" }
  ];

  const studentNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/student" },
    { icon: BookOpen, label: "AI Study Hub", href: "/dashboard/student/study-hub" },
    { icon: MessageSquare, label: "AI Chatbot", href: "/dashboard/student/chatbot" },
    { icon: FileEdit, label: "AI Humanizer", href: "/dashboard/student/humanizer" },
    { icon: FileText, label: "CV & Cover Letter", href: "/dashboard/student/cv-builder" },
    { icon: ClipboardList, label: "Deadline Planner", href: "/dashboard/student/deadline-planner" }
  ];

  const navItems = userType === "professional" ? professionalNavItems : studentNavItems;
  const initials = userName.split(" ").map(n => n[0]).join("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300",
          sidebarOpen ? "w-64" : "w-0 md:w-20"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className={cn("flex items-center gap-3", !sidebarOpen && "md:justify-center")}>
            {userType === "professional" ? (
              <Briefcase className="h-6 w-6 text-blue-600" />
            ) : (
              <GraduationCap className="h-6 w-6 text-purple-600" />
            )}
            {sidebarOpen && (
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WorkDesk AI
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={cn(!sidebarOpen && "md:hidden")}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-1 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.href} to={item.href}>
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                      isActive
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                      !sidebarOpen && "md:justify-center"
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {sidebarOpen && <span className="font-medium text-sm">{item.label}</span>}
                  </div>
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        {/* User Profile Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className={cn("flex items-center gap-3", !sidebarOpen && "md:flex-col md:gap-2")}>
            <Avatar>
              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {userName}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {userType}
                </p>
              </div>
            )}
          </div>
          <div className={cn("flex gap-2 mt-3", !sidebarOpen && "md:flex-col")}>
            <Button variant="ghost" size="icon" className="flex-1" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="flex-1">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        )}
      >
        {/* Mobile Menu Toggle */}
        <div className="md:hidden fixed top-4 left-4 z-40">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-white dark:bg-gray-800"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="h-full overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
