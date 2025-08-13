import React from 'react';
import { Github, Linkedin, Mail, Award, Target, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Tharun Kumar C",
      role: "Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in deep learning and neural networks with focus on computer vision and deepfake detection algorithms.",
      skills: ["Machine Learning", "Computer Vision", "Python", "TensorFlow"],
      social: {
        github: "#",
        linkedin: "#",
        email: "tharun@truthlensai.com"
      }
    },
    {
      name: "Dharani K",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about creating intuitive user interfaces and building scalable web applications with modern technologies.",
      skills: ["React", "Node.js", "UI/UX Design", "Cloud Architecture"],
      social: {
        github: "#",
        linkedin: "#",
        email: "dharani@truthlensai.com"
      }
    },
    {
      name: "Thanushrie Sathishkumar",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      bio: "Specializes in steganography analysis and statistical pattern recognition with expertise in digital forensics.",
      skills: ["Data Analysis", "Steganography", "Python", "Statistical Modeling"],
      social: {
        github: "#",
        linkedin: "#",
        email: "thanushrie@truthlensai.com"
      }
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Delivering accurate detection with cutting-edge AI algorithms and continuous model improvement."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together to solve complex problems and create solutions that benefit everyone."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible in AI-powered content verification technology."
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            About TruthLens AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of AI researchers and developers dedicated to combating digital deception 
            through advanced machine learning and computer vision technologies.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-md rounded-3xl border border-white/10 p-12">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  In an era where digital manipulation is becoming increasingly sophisticated, 
                  TruthLens AI stands as a guardian of digital authenticity. Our mission is to 
                  develop and deploy cutting-edge AI technologies that can detect deepfakes, 
                  reveal hidden data, and restore trust in digital media.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe that everyone deserves access to tools that can help them distinguish 
                  between authentic and manipulated content, protecting individuals and organizations 
                  from the growing threat of digital deception.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-purple-400 mb-3">{value.icon}</div>
                    <h3 className="font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-xs text-gray-400">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A diverse group of experts united by a common goal: making the digital world safer and more trustworthy
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white/20 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full group-hover:opacity-0 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-xs text-white border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.github}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group/icon"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover/icon:text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover/icon:text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group/icon"
                    >
                      <Mail className="w-5 h-5 text-gray-400 group-hover/icon:text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge technologies and frameworks to deliver reliable, scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "TensorFlow", category: "AI Framework", color: "from-orange-400 to-red-400" },
              { name: "React", category: "Frontend", color: "from-blue-400 to-cyan-400" },
              { name: "Python", category: "Backend", color: "from-yellow-400 to-green-400" },
              { name: "OpenCV", category: "Computer Vision", color: "from-purple-400 to-pink-400" },
              { name: "Node.js", category: "Runtime", color: "from-green-400 to-emerald-400" },
              { name: "PyTorch", category: "Deep Learning", color: "from-red-400 to-orange-400" },
              { name: "AWS", category: "Cloud Platform", color: "from-yellow-400 to-orange-400" },
              { name: "Docker", category: "Containerization", color: "from-cyan-400 to-blue-400" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white/20 rounded" />
                </div>
                <h3 className="font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;