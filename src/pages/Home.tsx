import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Coffee, Sparkles, Target, Star, Copy, Check } from 'lucide-react';
import { genAI } from '@/lib/gemini';

export default function Home() {
  const [description, setDescription] = useState('');
  const [statement, setStatement] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generateStatement = async () => {
    if (!description.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      if (!genAI) {
        throw new Error("API key not configured. Please add your Gemini API key to continue.");
      }
      
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Generate a powerful, concise, and inspiring mission statement for this organization/company: ${description}. The mission statement should be clear, memorable, and reflect the organization's core purpose and values. Focus on impact, vision, and value proposition. Keep it professional and avoid generic language.`;
      
      const result = await model.generateContent(prompt);
      setStatement(result.response.text());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while generating the mission statement');
      setStatement('');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(statement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 py-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text leading-tight">
            AI Mission Statement Generator ✨
          </h1>
          <p className="text-xl text-gray-600">
            Create powerful mission statements that inspire and drive success! 🎯
          </p>
        </div>
        
        <div className="gradient-border mb-8">
          <div className="p-8">
            <div className="space-y-6">
              <Textarea
                placeholder="✍️ Describe your organization, its purpose, values, and goals. Include your industry, target audience, and what makes you unique..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[120px] text-lg border-2 focus:border-purple-400"
              />
              
              <Button 
                onClick={generateStatement}
                disabled={loading || !description.trim()}
                className="w-full text-lg py-6 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
              >
                {loading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Crafting Your Mission...
                  </>
                ) : (
                  <>
                    <Target className="mr-2 h-5 w-5" />
                    Generate Mission Statement ✨
                  </>
                )}
              </Button>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {statement && (
          <Card className="p-6 mb-12 hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200">
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-xl font-semibold">Your Mission Statement</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex items-center gap-2 hover:bg-purple-50"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </div>
            <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {statement}
            </p>
          </Card>
        )}

        <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 mb-16">
          <div className="text-center space-y-4">
            <Coffee className="h-12 w-12 mx-auto text-purple-500" />
            <h2 className="text-2xl font-bold">Support Our Work 🚀</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Help us maintain and improve our AI tools by supporting our API & hosting costs. 
              Your contribution helps keep this tool free for everyone! 🙏
            </p>
            <a
              href="https://roihacks.gumroad.com/coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                <Coffee className="mr-2 h-5 w-5" />
                Buy Us a Coffee ☕
              </Button>
            </a>
          </div>
        </Card>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8 mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
              Free AI Mission Statement Generator: Craft Your Organization's Purpose ⚡
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Our Free AI Mission Statement Generator helps you create compelling, purposeful mission 
                statements that define your organization's direction and inspire stakeholders. Perfect for 
                businesses, nonprofits, and organizations of all sizes.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Star className="h-6 w-6 text-purple-500" />
                  The #1 AI Mission Statement Generator 🎯
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">🎯</span>
                    <span>Clear and compelling mission statements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🤖</span>
                    <span>AI-powered technology for perfect messaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⚡</span>
                    <span>Generate statements in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✨</span>
                    <span>Inspiring and purposeful content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💎</span>
                    <span>Free to use with unlimited generations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Perfect For Every Organization 🏢</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI mission statement generator is perfect for:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Startups and new businesses</li>
                  <li>• Nonprofit organizations</li>
                  <li>• Educational institutions</li>
                  <li>• Corporate divisions</li>
                  <li>• Social enterprises</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Tips for Effective Mission Statements ✍️</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Be clear about your purpose</li>
                  <li>Focus on impact and value</li>
                  <li>Keep it concise and memorable</li>
                  <li>Include your unique approach</li>
                  <li>Make it inspiring and actionable</li>
                </ol>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}