import { Card } from "@/components/ui/card";
import { Target, Star, Compass, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
            About Us ✨
          </h1>
          <p className="text-xl text-gray-600">
            Empowering organizations with AI-crafted mission statements
          </p>
        </div>
        
        <div className="gradient-border mb-16">
          <div className="p-8 text-center">
            <p className="text-xl leading-relaxed text-gray-700">
              Welcome to AI Mission Statement Generator, where technology meets purpose to help
              organizations define their core mission effectively. Our platform leverages cutting-edge
              AI technology to generate clear, inspiring, and impactful mission statements that
              drive success. ✨
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-purple-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission 🎯</h2>
              <p className="text-gray-600">
                Helping organizations articulate their purpose clearly and
                inspire stakeholders with compelling mission statements.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <Compass className="h-8 w-8 text-purple-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Values 🌟</h2>
              <p className="text-gray-600">
                We believe in clarity of purpose, inspiring leadership, and making
                powerful mission statements accessible to all organizations.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-12 mb-16">
          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-purple-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">How It Works ⚡</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our AI-powered platform uses advanced natural language processing to understand your
              organization's unique characteristics and generate powerful mission statements that
              capture your purpose and inspire action.
            </p>
          </section>

          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-purple-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Our Commitment 🤝</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're committed to providing a reliable, user-friendly tool that helps organizations
              define their purpose effectively. We continuously improve our AI models
              and user experience based on feedback from our community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}