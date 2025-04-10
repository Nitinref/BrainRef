import React from 'react';
import { Brain, ChevronRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Frame() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col">
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-2 rounded-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                BrainRef
              </span>
            </div>
            <div className="flex space-x-4">
              <button 
                className="px-4 py-2 text-transparent bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text hover:from-purple-700 hover:to-purple-600 font-medium"
                onClick={() => navigate('/signin')}
              >
                Sign In
              </button>
              <button 
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:from-purple-700 hover:to-purple-600 transition duration-200 font-medium shadow-lg shadow-purple-500/20"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                Unlock Your Mind's
              </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                {' '}Full Potential
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your learning experience with BrainRef. Organize, connect, and retain information
              like never before using our advanced reference system.
            </p>
            <div className="flex space-x-4">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:from-purple-700 hover:to-purple-600 transition duration-200 font-medium flex items-center shadow-lg shadow-purple-500/20"
                onClick={() => navigate('/signup')}
              >
                Get Started Free
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-border rounded-lg font-medium relative group">
                <span className="bg-white absolute inset-[2px] rounded-md grid place-items-center">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-purple-600">
                    Learn More
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-3xl rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="w-24 h-24 mx-auto text-purple-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Knowledge Hub</h3>
                  <p className="text-gray-600">Visualize and connect your ideas in one place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                  BrainRef
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Empowering your learning journey with intelligent organization.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-purple-600 transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-600 transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Tutorials</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} BrainRef. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Frame;