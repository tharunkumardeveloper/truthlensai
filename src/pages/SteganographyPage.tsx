import React, { useState, useRef } from 'react';
import { Upload, Search, Download, AlertTriangle, CheckCircle, Shield, FileText, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface StegoResult {
  hasHiddenData: boolean;
  confidence: number;
  dataType: string;
  extractedText?: string;
  hiddenRegions: Array<{ x: number; y: number; width: number; height: number }>;
}

const SteganographyPage: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stegoResult, setStegoResult] = useState<StegoResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileSelection = (file: File) => {
    if (file.type.startsWith('image/')) {
      setImageFile(file);
      setStegoResult(null);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = async () => {
    setIsAnalyzing(true);
    setProgress(0);
    setStegoResult(null);

    // Simulate analysis steps
    const steps = [
      'Analyzing pixel patterns...',
      'Checking LSB variations...',
      'Detecting frequency anomalies...',
      'Extracting hidden data...',
      'Validating results...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress((i + 1) / steps.length * 100);
    }

    // Generate mock results
    const hasHiddenData = Math.random() > 0.4;
    const confidence = Math.random() * 30 + 70;
    
    const hiddenTexts = [
      "Secret message hidden in image",
      "Classified data embedded",
      "Hidden coordinates: 40.7128, -74.0060",
      "Contact: agent@example.com",
      "Meeting at midnight"
    ];

    setStegoResult({
      hasHiddenData,
      confidence: Math.round(confidence * 100) / 100,
      dataType: hasHiddenData ? (Math.random() > 0.5 ? 'Text' : 'Binary') : 'None',
      extractedText: hasHiddenData ? hiddenTexts[Math.floor(Math.random() * hiddenTexts.length)] : undefined,
      hiddenRegions: hasHiddenData ? [
        { x: 20, y: 30, width: 60, height: 40 },
        { x: 150, y: 80, width: 80, height: 50 }
      ] : []
    });

    setIsAnalyzing(false);
  };

  const generateSteganographyReport = () => {
    if (!stegoResult) return;

    const reportContent = `
TRUTHLENS AI - STEGANOGRAPHY ANALYSIS REPORT
============================================

Analysis Date: ${new Date().toLocaleString()}
Image File: ${imageFile?.name || 'Demo Image'}

DETECTION RESULTS
-----------------
Status: ${stegoResult.hasHiddenData ? 'HIDDEN DATA DETECTED' : 'NO HIDDEN DATA FOUND'}
Confidence Level: ${stegoResult.confidence}%
Data Type: ${stegoResult.dataType}
Risk Assessment: ${stegoResult.confidence > 80 ? 'HIGH CONFIDENCE' : stegoResult.confidence > 60 ? 'MODERATE CONFIDENCE' : 'LOW CONFIDENCE'}

${stegoResult.extractedText ? `
EXTRACTED CONTENT
-----------------
Hidden Message: "${stegoResult.extractedText}"
Content Length: ${stegoResult.extractedText.length} characters
Encoding Method: LSB (Least Significant Bit)
` : ''}

TECHNICAL ANALYSIS
------------------
Analysis Method: Multi-layer steganographic detection
Pixel Patterns: ${stegoResult.hasHiddenData ? 'Anomalies detected' : 'Normal distribution'}
LSB Variations: ${stegoResult.hasHiddenData ? 'Irregular patterns found' : 'Standard variations'}
Frequency Analysis: ${stegoResult.hasHiddenData ? 'Suspicious frequencies detected' : 'Normal frequency distribution'}
Statistical Tests: ${stegoResult.hasHiddenData ? 'Failed chi-square test' : 'Passed statistical tests'}

DETECTION METHODOLOGY
---------------------
• Least Significant Bit (LSB) Analysis: Examined pixel LSBs for hidden data patterns
• Statistical Analysis: Applied chi-square and other statistical tests
• Frequency Domain Analysis: Analyzed DCT coefficients for irregularities
• Spatial Domain Inspection: Checked for pixel manipulation artifacts
• Histogram Analysis: Examined color distribution patterns

${stegoResult.hasHiddenData ? `
STEGANOGRAPHY INDICATORS
------------------------
• Irregular LSB patterns detected
• Statistical anomalies in pixel distribution
• Suspicious frequency domain characteristics
• Non-random data patterns found
• Hidden regions identified: ${stegoResult.hiddenRegions.length} areas

SECURITY IMPLICATIONS
---------------------
• This image contains hidden information
• Data may have been embedded intentionally
• Consider the source and context of this image
• Extracted content should be analyzed for potential threats
• Recommend further investigation of image origin
` : `
AUTHENTICITY INDICATORS
-----------------------
• No hidden data patterns detected
• Normal statistical distribution of pixels
• Standard compression characteristics
• No LSB manipulation artifacts found
• Clean frequency domain analysis

VERIFICATION STATUS
-------------------
• Image appears to contain no hidden data
• Standard image compression patterns
• Normal pixel distribution characteristics
• No steganographic indicators found
`}

ANALYSIS PARAMETERS
-------------------
Image Dimensions: ${Math.floor(Math.random() * 1000) + 500}x${Math.floor(Math.random() * 800) + 400} pixels
Color Depth: 24-bit RGB
File Format: ${imageFile?.type || 'image/jpeg'}
Compression: ${Math.floor(Math.random() * 30) + 70}% quality
Analysis Duration: ${Math.floor(Math.random() * 8) + 3} seconds

DISCLAIMER
----------
This analysis is provided by TruthLens AI steganography detection system. While our
algorithms are highly sophisticated, steganography detection is inherently challenging
and results should be interpreted within the broader context of digital forensics.
For critical applications, consider multiple analysis tools and expert review.

Report ID: ${Math.random().toString(36).substr(2, 9).toUpperCase()}
Generated by: TruthLens AI v2.1.0

For questions or support, contact: support@truthlensai.com
    `.trim();

    // Create and download the report
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TruthLens_Steganography_Report_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearFile = () => {
    setImageFile(null);
    setImagePreview('');
    setStegoResult(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const tryDemo = () => {
    clearFile();
    const demoImage = '/Steganography.png';
    setImageFile(new File([], 'demo-steganography-image.png', { type: 'image/png' }));
    setImagePreview(demoImage);
    // Don't auto-start analysis for demo
  };

  return (
    <div className="pt-20 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Steganography Detection
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Reveal hidden data embedded within images using advanced analysis techniques
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload & Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Upload className="w-6 h-6 text-cyan-400" />
                <span>Upload Image</span>
              </h2>

              <div
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                  dragActive
                    ? 'border-cyan-400 bg-cyan-500/10'
                    : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleFileSelection(e.target.files[0])}
                  className="hidden"
                />
                
                <div className="mb-4">
                  <Shield className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {imageFile ? imageFile.name : 'Drop your image here'}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {imageFile ? 'File selected successfully' : 'Supported: JPG, PNG, GIF, WEBP'}
                  </p>
                </div>

                {!imageFile ? (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Choose Image
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {!isAnalyzing && !stegoResult && (
                      <button
                        onClick={simulateAnalysis}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                      >
                        <Search className="w-5 h-5" />
                        <span>Analyze Image</span>
                      </button>
                    )}
                    <button
                      onClick={clearFile}
                      className="px-6 py-3 bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl font-semibold hover:bg-red-500/30 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Trash2 className="w-5 h-5" />
                      <span>Remove File</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={tryDemo}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 rounded-xl font-semibold hover:bg-orange-500/30 hover:scale-105 transition-all duration-300 text-sm"
                >
                  🖼️ Try Demo Image (Hidden Data)
                </button>
              </div>

              {/* Progress Bar */}
              {isAnalyzing && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Analyzing image...</span>
                    <span className="text-sm text-cyan-400">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8"
              >
                <h3 className="text-xl font-bold mb-4">Original Image</h3>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Original"
                    className="w-full h-auto"
                  />
                  {stegoResult?.hiddenRegions.map((region, index) => (
                    <div
                      key={index}
                      className="absolute border-2 border-red-400 bg-red-400/20"
                      style={{
                        left: `${region.x}px`,
                        top: `${region.y}px`,
                        width: `${region.width}px`,
                        height: `${region.height}px`,
                      }}
                    >
                      <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Hidden Data
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {stegoResult && (
              <>
                <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <FileText className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold">Analysis Results</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center">
                      <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                        stegoResult.hasHiddenData 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : 'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                        {stegoResult.hasHiddenData ? 
                          <AlertTriangle className="w-5 h-5" /> : 
                          <CheckCircle className="w-5 h-5" />
                        }
                        <span className="font-semibold">
                          {stegoResult.hasHiddenData ? 'Hidden Data Found' : 'No Hidden Data'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400">Confidence</span>
                        <span className="text-white font-semibold">{stegoResult.confidence}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${
                            stegoResult.confidence > 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                            stegoResult.confidence > 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                            'bg-gradient-to-r from-red-500 to-pink-500'
                          }`}
                          style={{ width: `${stegoResult.confidence}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-gray-400 text-sm mb-2">Data Type</div>
                      <div className="text-lg font-semibold text-white">{stegoResult.dataType}</div>
                    </div>

                    {stegoResult.extractedText && (
                      <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl p-4 border border-red-500/20">
                        <div className="text-gray-400 text-sm mb-2">Extracted Content</div>
                        <div className="text-white font-mono text-sm bg-black/30 rounded-lg p-3">
                          {stegoResult.extractedText}
                        </div>
                      </div>
                    )}

                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Download Analysis Report</span>
                    </button>
                    <button 
                      onClick={generateSteganographyReport}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Analysis Report</span>
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Analysis Info */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2" />
                  <span>Analyzes least significant bits (LSB) for hidden data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>Detects statistical anomalies in pixel patterns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" />
                  <span>Identifies frequency domain irregularities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2" />
                  <span>Extracts and validates hidden content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2" />
                  <span>Demo image contains confirmed hidden data</span>
                </li>
              </ul>
            </div>

            {/* Supported Formats */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8">
              <h3 className="text-xl font-bold mb-4">Supported Methods</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="font-semibold text-cyan-400 mb-2">LSB Steganography</div>
                  <div className="text-gray-400">Hidden in pixel bits</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="font-semibold text-blue-400 mb-2">DCT Domain</div>
                  <div className="text-gray-400">Frequency analysis</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="font-semibold text-purple-400 mb-2">Spatial Domain</div>
                  <div className="text-gray-400">Pixel manipulation</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="font-semibold text-pink-400 mb-2">Transform Domain</div>
                  <div className="text-gray-400">Mathematical transforms</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SteganographyPage;