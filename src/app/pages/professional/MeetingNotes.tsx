import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { FileText, Upload, Sparkles, Copy, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export default function ProfessionalMeetingNotes() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState("");
  const [summary, setSummary] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const processMeetingNotes = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setSummary(`# Meeting Summary

**Date:** ${new Date().toLocaleDateString()}
**Attendees:** [List would be extracted from notes]

## Key Discussion Points
- Main topic 1: Discussion details
- Main topic 2: Discussion details
- Main topic 3: Discussion details

## Action Items
- [ ] Task 1 - Assigned to: [Person] - Due: [Date]
- [ ] Task 2 - Assigned to: [Person] - Due: [Date]
- [ ] Task 3 - Assigned to: [Person] - Due: [Date]

## Decisions Made
- Decision 1 with rationale
- Decision 2 with rationale

## Next Steps
- Schedule follow-up meeting
- Review action items progress

*Note: In production, this would use AI to analyze your meeting notes and extract structured information.*`);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Meeting Notes Summarizer</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Upload or paste your meeting notes for AI-powered summaries
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <Card>
          <CardHeader>
            <CardTitle>Input Your Meeting Notes</CardTitle>
            <CardDescription>Upload a document or paste your notes</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upload">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">Upload File</TabsTrigger>
                <TabsTrigger value="paste">Paste Text</TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                  <Upload className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-blue-600 hover:underline">Click to upload</span> or drag and drop
                    </div>
                    <div className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX, or TXT (max 10MB)</div>
                  </label>
                  {uploadedFile && (
                    <div className="mt-4 text-sm text-green-600">
                      ✓ {uploadedFile.name} uploaded
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="paste" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="notes">Meeting Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Paste your meeting notes here..."
                    rows={12}
                    value={pastedText}
                    onChange={(e) => setPastedText(e.target.value)}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <Button
              onClick={processMeetingNotes}
              className="w-full mt-4"
              size="lg"
              disabled={isProcessing || (!uploadedFile && !pastedText)}
            >
              {isProcessing ? (
                <>Processing...</>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Summary
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Summary & Action Items</CardTitle>
                <CardDescription>AI-generated structured summary</CardDescription>
              </div>
              {summary && (
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(summary)}>
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
            {summary ? (
              <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} rows={20} className="font-mono text-sm" />
            ) : (
              <div className="flex items-center justify-center h-96 text-gray-400 dark:text-gray-600">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto mb-3 opacity-20" />
                  <p>Your meeting summary will appear here</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
