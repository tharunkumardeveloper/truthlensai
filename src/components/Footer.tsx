import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 mb-6">
            <h4 className="text-lg font-bold text-white mb-2">Student Project</h4>
            <p className="text-gray-300 text-sm mb-4">
              This is a student project created by{' '}
              <span className="text-purple-400 font-semibold">Tharun Kumar C</span>,{' '}
              <span className="text-cyan-400 font-semibold">Dharani K</span>, and{' '}
              <span className="text-pink-400 font-semibold">Thanushrie Sathishkumar</span>
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:contact@truthlensai.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 TruthLens AI. All rights reserved.</p>
            <p className="mt-2">Powered by advanced AI technology for digital content verification</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;