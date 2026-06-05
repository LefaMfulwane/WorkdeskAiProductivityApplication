import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Upload, BookOpen, Headphones, FileText, Target, Sparkles } from "lucide-react";
import { Progress } from "../../components/ui/progress";
import { Textarea } from "../../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function StudentStudyHub() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState("");
  const [studyReadiness, setStudyReadiness] = useState(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const studyTools = [
    {
      icon: FileText,
      title: "Study Guide Generator",
      description: "Convert notes into structured study guides",
      color: "from-blue-500 to-blue-600",
      action: "Generate Guide"
    },
    {
      icon: Target,
      title: "Exam Predictor",
      description: "Identify likely exam topics and questions",
      color: "from-red-500 to-red-600",
      action: "Predict Topics"
    },
    {
      icon: Headphones,
      title: "Podcast Creator",
      description: "Turn study material into audio summaries",
      color: "from-purple-500 to-purple-600",
      action: "Create Podcast"
    },
    {
      icon: BookOpen,
      title: "Quiz Generator",
      description: "Generate adaptive quizzes from your notes",
      color: "from-green-500 to-green-600",
      action: "Generate Quiz"
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Study Hub</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your all-in-one study companion
            </p>
          </div>
        </div>
      </div>

      {/* Study Readiness */}
      <Card className="mb-6 border-2 border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            Study Readiness
          </CardTitle>
          <CardDescription>Your overall preparation level for upcoming exams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-semibold">{studyReadiness}%</span>
            </div>
            <Progress value={studyReadiness} className="h-3" />
            <p className="text-xs text-gray-500 mt-2">
              Upload materials and complete quizzes to improve your readiness score
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Upload Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Upload Study Material</CardTitle>
          <CardDescription>Upload documents or paste text to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upload">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Files</TabsTrigger>
              <TabsTrigger value="paste">Paste Text</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <Upload className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                <input
                  type="file"
                  id="study-file-upload"
                  className="hidden"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
                  onChange={handleFileUpload}
                />
                <label htmlFor="study-file-upload" className="cursor-pointer">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-purple-600 hover:underline">Click to upload</span> or drag and drop
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    PDF, DOC, DOCX, PPT, PPTX, or TXT
                  </div>
                </label>
                {uploadedFile && (
                  <div className="mt-4 text-sm text-green-600">
                    ✓ {uploadedFile.name} uploaded
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="paste" className="space-y-4">
              <Textarea
                placeholder="Paste your study notes here..."
                rows={8}
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Study Tools Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Study Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studyTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.title}
                className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-purple-200 dark:hover:border-purple-800"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" disabled={!uploadedFile && !pastedText}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    {tool.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Roadmap Visualization Placeholder */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Study Roadmap</CardTitle>
          <CardDescription>Visual progress through your study materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40 text-gray-400">
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-2 opacity-20" />
              <p className="text-sm">Your personalized study roadmap will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
