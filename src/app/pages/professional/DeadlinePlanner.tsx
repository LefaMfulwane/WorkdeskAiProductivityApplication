import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ClipboardList } from "lucide-react";

export default function ProfessionalDeadlinePlanner() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center">
          <ClipboardList className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Deadline-Aware Planner</h1>
          <p className="text-sm text-gray-500">Smart planning with deadline tracking</p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>AI-powered deadline management and planning</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">This feature is under development.</p>
        </CardContent>
      </Card>
    </div>
  );
}
