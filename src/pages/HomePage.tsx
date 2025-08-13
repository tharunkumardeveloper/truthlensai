import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Eye, Zap, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 mb-8">
              <Eye className="w-12 h-12 text-purple-400" />
              <Shield className="w-12 h-12 text-cyan-400" />
            </div>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Exposing the Unseen
            </span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            Detect Deepfakes & Hidden Data
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Advanced AI-powered detection of deepfake videos and steganographic content. 
            Protect yourself from digital deception with cutting-edge technology.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            variants={staggerChildren}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/deepfake-detection"
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Eye className="w-6 h-6" />
              <span>Try Deepfake Detection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/steganography"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Shield className="w-6 h-6" />
              <span>Try Steganography Detection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Powerful Detection Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced AI algorithms provide unprecedented accuracy in detecting manipulated content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Deepfake Detection",
                description: "Advanced neural networks analyze facial inconsistencies and temporal artifacts in video content.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Steganography Analysis",
                description: "Detect hidden data embedded within images using sophisticated statistical analysis.",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Real-time Processing",
                description: "Lightning-fast analysis with frame-by-frame extraction and instant results visualization.",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "99.2%", label: "Detection Accuracy" },
              { number: "< 30s", label: "Processing Time" },
              { number: "500+", label: "Videos Analyzed" },
              { number: "24/7", label: "Availability" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;