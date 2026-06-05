import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Mail, Sparkles, Copy, Download, RefreshCw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function ProfessionalEmail() {
  const [formData, setFormData] = useState({
    recipient: "",
    subject: "",
    context: "",
    tone: "professional",
    length: "medium"
  });
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateEmail = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedEmail(`Dear ${formData.recipient || "[Recipient Name]"},

I hope this email finds you well.

${formData.context || "[Your message will be generated here based on your context and requirements. In a production app, this would use an AI API like OpenAI or Claude to generate contextually appropriate content.]"}

I look forward to hearing from you soon.

Best regards,
[Your Name]`);
      setIsGenerating(false);
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(generatedEmail);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Email Generator</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Create professional emails in seconds</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle>Email Details</CardTitle>
            <CardDescription>Provide information about the email you want to create</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Name</Label>
              <Input
                id="recipient"
                placeholder="e.g., John Smith"
                value={formData.recipient}
                onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="e.g., Project Update"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="context">Context / Key Points</Label>
              <Textarea
                id="context"
                placeholder="Describe what you want to communicate..."
                rows={6}
                value={formData.context}
                onChange={(e) => setFormData({ ...formData, context: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tone</Label>
                <Select value={formData.tone} onValueChange={(value) => setFormData({ ...formData, tone: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Length</Label>
                <Select value={formData.length} onValueChange={(value) => setFormData({ ...formData, length: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="long">Long</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={generateEmail} className="w-full" size="lg" disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Email
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Output */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Generated Email</CardTitle>
                <CardDescription>Review and edit as needed</CardDescription>
              </div>
              {generatedEmail && (
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={copyEmail}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {generatedEmail ? (
              <Textarea
                value={generatedEmail}
                onChange={(e) => setGeneratedEmail(e.target.value)}
                rows={20}
                className="font-mono text-sm"
              />
            ) : (
              <div className="flex items-center justify-center h-96 text-gray-400 dark:text-gray-600">
                <div className="text-center">
                  <Mail className="h-12 w-12 mx-auto mb-3 opacity-20" />
                  <p>Your generated email will appear here</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Templates */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Quick Templates</CardTitle>
          <CardDescription>Start with a template and customize</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: "Meeting Request", desc: "Schedule a meeting" },
              { title: "Follow-up", desc: "Follow up after a meeting" },
              { title: "Introduction", desc: "Introduce yourself or someone" },
              { title: "Thank You", desc: "Express gratitude" },
              { title: "Status Update", desc: "Share project progress" },
              { title: "Out of Office", desc: "Set up auto-reply" }
            ].map((template) => (
              <Button key={template.title} variant="outline" className="h-auto p-4 flex flex-col items-start">
                <div className="font-semibold text-left">{template.title}</div>
                <div className="text-xs text-gray-500 text-left mt-1">{template.desc}</div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
