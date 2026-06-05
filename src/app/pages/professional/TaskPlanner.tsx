import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Calendar as CalendarIcon, Plus, CheckCircle2, Circle, Trash2 } from "lucide-react";
import { Checkbox } from "../../components/ui/checkbox";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: string;
}

export default function ProfessionalTaskPlanner() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Review quarterly reports", completed: false, priority: "high", dueDate: "2026-06-10" },
    { id: "2", title: "Prepare presentation for client meeting", completed: false, priority: "high", dueDate: "2026-06-08" },
    { id: "3", title: "Update project documentation", completed: true, priority: "medium", dueDate: "2026-06-05" },
    { id: "4", title: "Team standup meeting", completed: true, priority: "low" }
  ]);
  const [newTask, setNewTask] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
      priority: "medium",
      dueDate: selectedDate || undefined
    };
    setTasks([task, ...tasks]);
    setNewTask("");
    setSelectedDate("");
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const incompleteTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
            <CalendarIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Task Planner</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Organize your tasks with AI-powered scheduling
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stats & Add Task */}
        <div className="space-y-6">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</span>
                <span className="text-2xl font-bold">{tasks.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Completed</span>
                <span className="text-2xl font-bold text-green-600">{completedTasks.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Pending</span>
                <span className="text-2xl font-bold text-orange-600">{incompleteTasks.length}</span>
              </div>
            </CardContent>
          </Card>

          {/* Add Task */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="task">Task Title</Label>
                <Input
                  id="task"
                  placeholder="Enter task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTask()}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              <Button onClick={addTask} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Task Lists */}
        <div className="lg:col-span-2 space-y-6">
          {/* Pending Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
              <CardDescription>{incompleteTasks.length} tasks to complete</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {incompleteTasks.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-2 opacity-20" />
                  <p>No pending tasks. Great job!</p>
                </div>
              ) : (
                incompleteTasks.map(task => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
                    <div className="flex-1">
                      <div className="font-medium">{task.title}</div>
                      {task.dueDate && (
                        <div className="text-xs text-gray-500 mt-1">Due: {new Date(task.dueDate).toLocaleDateString()}</div>
                      )}
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      task.priority === "high" ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400" :
                      task.priority === "medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400" :
                      "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    }`}>
                      {task.priority}
                    </div>
                    <Button size="icon" variant="ghost" onClick={() => deleteTask(task.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Completed Tasks */}
          {completedTasks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Completed Tasks</CardTitle>
                <CardDescription>{completedTasks.length} tasks done</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {completedTasks.map(task => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 opacity-60"
                  >
                    <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} />
                    <div className="flex-1">
                      <div className="font-medium line-through">{task.title}</div>
                    </div>
                    <Button size="icon" variant="ghost" onClick={() => deleteTask(task.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
