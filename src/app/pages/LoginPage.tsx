import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function LoginPage() {
  const navigate = useNavigate();
  const [professionalForm, setProfessionalForm] = useState({ email: "", password: "" });
  const [studentForm, setStudentForm] = useState({ email: "", password: "" });

  const handleProfessionalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard/professional");
  };

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard/student");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <Card className="border-2">
          <CardHeader className="space-y-3">
            <div className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WorkDesk AI
            </div>
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="professional" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="student">Student</TabsTrigger>
              </TabsList>

              <TabsContent value="professional">
                <form onSubmit={handleProfessionalLogin} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="prof-email">Email</Label>
                    <Input
                      id="prof-email"
                      type="email"
                      placeholder="you@example.com"
                      value={professionalForm.email}
                      onChange={(e) => setProfessionalForm({ ...professionalForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prof-password">Password</Label>
                    <Input
                      id="prof-password"
                      type="password"
                      value={professionalForm.password}
                      onChange={(e) => setProfessionalForm({ ...professionalForm, password: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Sign In
                  </Button>

                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/signup/professional" className="text-blue-600 hover:underline">
                      Sign up
                    </Link>
                  </p>
                </form>
              </TabsContent>

              <TabsContent value="student">
                <form onSubmit={handleStudentLogin} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="you@example.com"
                      value={studentForm.email}
                      onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      value={studentForm.password}
                      onChange={(e) => setStudentForm({ ...studentForm, password: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Sign In
                  </Button>

                  <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/signup/student" className="text-blue-600 hover:underline">
                      Sign up
                    </Link>
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
