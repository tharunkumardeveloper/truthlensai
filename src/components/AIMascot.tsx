import React, { useState } from 'react';
import { MessageCircle, X, Lightbulb, Shield, Eye } from 'lucide-react';

const AIMascot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    "Upload videos in MP4 format for best deepfake detection results!",
    "Our AI can detect even subtle facial inconsistencies in videos.",
    "Steganography can hide data in the least significant bits of images.",
    "Always verify suspicious content with multiple detection methods.",
    "High-resolution images provide more accurate steganography analysis.",
  ];

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-xs animate-slide-up">
          <div className="flex items-start space-x-2 mb-3">
            <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5" />
            <p className="text-sm text-white">{tips[currentTip]}</p>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={nextTip}
              className="text-xs text-purple-300 hover:text-purple-200 transition-colors"
            >
              Next Tip →
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mascot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      >
        {isOpen ? (
          <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        ) : (
          <div className="relative">
            <Eye className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
          </div>
        )}
      </button>
    </div>
  );
};

export default AIMascot;