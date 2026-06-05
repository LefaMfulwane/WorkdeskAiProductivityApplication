import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { FileEdit, RefreshCw, Copy, Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Label } from "../../components/ui/label";

export default function StudentHumanizer() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState("paraphrase");
  const [isProcessing, setIsProcessing] = useState(false);

  const humanizeText = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setOutputText(`This is the humanized/paraphrased version of your text. In a production app, this would use AI to:

- Paraphrase while maintaining meaning
- Adjust tone and style
- Ensure originality
- Maintain academic integrity

Your original text would be transformed here based on the selected mode and parameters.`);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
            <FileEdit className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Humanizer</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Paraphrase and refine your writing
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <Card>
          <CardHeader>
            <CardTitle>Original Text</CardTitle>
            <CardDescription>Enter the text you want to paraphrase</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Mode</Label>
              <Select value={mode} onValueChange={setMode}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paraphrase">Paraphrase</SelectItem>
                  <SelectItem value="simplify">Simplify</SelectItem>
                  <SelectItem value="formal">Make Formal</SelectItem>
                  <SelectItem value="casual">Make Casual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Textarea
              placeholder="Paste your text here..."
              rows={15}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />

            <Button
              onClick={humanizeText}
              className="w-full"
              size="lg"
              disabled={isProcessing || !inputText.trim()}
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <FileEdit className="mr-2 h-4 w-4" />
                  Humanize Text
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
                <CardTitle>Humanized Text</CardTitle>
                <CardDescription>AI-refined version</CardDescription>
              </div>
              {outputText && (
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(outputText)}>
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
            {outputText ? (
              <Textarea
                value={outputText}
                onChange={(e) => setOutputText(e.target.value)}
                rows={20}
              />
            ) : (
              <div className="flex items-center justify-center h-96 text-gray-400 dark:text-gray-600">
                <div className="text-center">
                  <FileEdit className="h-12 w-12 mx-auto mb-3 opacity-20" />
                  <p>Your humanized text will appear here</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="mt-6 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            ⚠️ Academic Integrity Notice
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-700 dark:text-gray-300">
          <p>
            This tool is designed to help you improve your writing and learn better ways to express ideas.
            Always ensure your work represents your own understanding. Submitting AI-generated content as
            your own work may violate academic integrity policies.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
