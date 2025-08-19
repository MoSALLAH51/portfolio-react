import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/Button";
import { ArrowLeft, Github, Play, ChevronLeft, ChevronRight, Star, Zap, ExternalLink, Code, Smartphone, Database, Download } from "lucide-react";
import projects from "./Portfolio"; // ✅ بدون أقواس
import { useParams, useLocation } from "react-router-dom";

// Project data (can be passed as props or fetched from API)




const getProjectIcon = (type) => {
  switch(type) {
    case 'mobile': return <Smartphone className="w-8 h-8" />;
    case 'web': return <Code className="w-8 h-8" />;
    default: return <Database className="w-8 h-8" />;
  }
};

export default function ProjectDetailPage() {
    const { id } = useParams();
  const location = useLocation();
  const passedProject = location.state?.project;
  const projectData = passedProject || projects.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const nextImage = () => {
    
    setCurrentImage((prev) => (prev + 1) % projectData.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projectData.images.length) % projectData.images.length);
  };

  const goBack = () => {
    // Can use React Router to navigate back to home page
    window.history.back();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-blue-800/10"></div>
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
                {/* Additional glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      

      {/* Mouse Follower */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-100 shadow-lg shadow-cyan-400/50"
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-xl border-b border-blue-500/20 z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Button 
              onClick={goBack}
              className="group bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 border border-blue-400/30 hover:border-cyan-400/50"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {projectData.title}
            </h1>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-blue-200">Featured Project</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 pb-10">
        {/* Project Hero Section */}
        <section className="py-20 px-6 relative">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/10"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10">
            <div 
              data-animate
              id="project-header"
              className={`text-center mb-16 transition-all duration-1000 transform ${
                isVisible['project-header'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xl shadow-blue-500/25 animate-pulse">
                  {getProjectIcon(projectData.type)}
                </div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {projectData.title}
                </h1>
              </div>
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                {projectData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 px-6 bg-blue-900/20 backdrop-blur-sm relative border-y border-blue-500/10">
          <div className="max-w-6xl mx-auto">
            <div 
              data-animate
              id="gallery-title"
              className={`text-center mb-12 transition-all duration-1000 transform ${
                isVisible['gallery-title'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Project Gallery
              </h2>
              <p className="text-lg text-blue-200">Screenshots from the project</p>
            </div>

            {/* Main Image Display */}
            <div 
              data-animate
              id="main-gallery"
              className={`relative mb-12 group/gallery transition-all duration-1000 transform ${
                isVisible['main-gallery'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-slate-800 shadow-2xl shadow-blue-500/10 border border-blue-500/20">
                <img 
                  src={projectData.images[currentImage]} 
                  alt={`${projectData.title} - Image ${currentImage + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover/gallery:scale-105"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600/1e293b/64748b?text=${encodeURIComponent(projectData.title)}`;
                  }}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-blue-900/80 hover:bg-blue-800/90 text-cyan-100 p-4 rounded-full transition-all duration-300 hover:scale-110 group/btn border border-blue-400/30 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 group-hover/btn:animate-pulse" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-blue-900/80 hover:bg-blue-800/90 text-cyan-100 p-4 rounded-full transition-all duration-300 hover:scale-110 group/btn border border-blue-400/30 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 group-hover/btn:animate-pulse" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute top-6 right-6 bg-blue-900/80 text-cyan-100 px-6 py-3 rounded-full text-lg font-bold backdrop-blur-sm border border-blue-400/30">
                  {currentImage + 1} / {projectData.images.length}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            {/* Thumbnail Navigation */}
            <div 
              data-animate
              id="thumbnails"
              className={`flex gap-4 overflow-x-auto pb-4 justify-center transition-all duration-1000 transform ${
                isVisible['thumbnails'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              {projectData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                    index === currentImage 
                      ? `border-cyan-400 shadow-lg shadow-cyan-400/50 scale-110` 
                      : 'border-blue-400/50 hover:border-cyan-400/70'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Description Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div 
              data-animate
              id="description"
              className={`transition-all duration-1000 transform ${
                isVisible['description'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Project Description
              </h2>
              <div className="bg-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
                <p className="text-blue-100 leading-relaxed text-lg mb-8 relative z-10">
                  {projectData.fullDescription}
                </p>
                
                {/* Technologies Used */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {projectData.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-lg font-medium shadow-lg shadow-blue-500/25 hover:scale-110 transition-all duration-300 cursor-pointer border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons Section */}
        <section className="py-20 px-6 bg-blue-900/20 backdrop-blur-sm relative border-y border-blue-500/10">
          <div className="max-w-4xl mx-auto">
            <div 
              data-animate
              id="actions"
              className={`text-center transition-all duration-1000 transform ${
                isVisible['actions'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Explore the Project
              </h2>
              <p className="text-xl text-blue-100 mb-12">
                Discover more about this project through the following links
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
                {projectData.github && (
                  <Button 
                    className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-12 py-6 text-xl rounded-full shadow-2xl shadow-blue-500/25 hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-110 w-full md:w-auto border border-blue-400/30 hover:border-cyan-400/50"
                    onClick={() => window.open(projectData.github, '_blank')}
                  >
                    <Github className="w-8 h-8 mr-3 group-hover:animate-spin" />
                    View Code on GitHub
                    <ExternalLink className="w-6 h-6 ml-3 group-hover:animate-bounce" />
                  </Button>
                )}

                {projectData.video && (
                  <Button 
                    className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-12 py-6 text-xl rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-blue-400/25 transition-all duration-300 hover:scale-110 w-full md:w-auto border border-cyan-400/30 hover:border-blue-400/50"
                    onClick={() => window.open(projectData.video, '_blank')}
                  >
                    <Play className="w-8 h-8 mr-3 group-hover:animate-pulse" />
                    Watch Video
                    <Zap className="w-6 h-6 ml-3 group-hover:animate-bounce" />
                  </Button>
                )}

                {projectData.downloadUrl && projectData.downloadUrl !== "" && (
                  <Button 
                    className="group bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 px-12 py-6 text-xl rounded-full shadow-2xl shadow-green-500/25 hover:shadow-emerald-400/25 transition-all duration-300 hover:scale-110 w-full md:w-auto border border-green-400/30 hover:border-emerald-400/50"
                    onClick={() => window.open(projectData.downloadUrl, '_blank')}
                  >
                    <Download className="w-8 h-8 mr-3 group-hover:animate-bounce" />
                    Download
                    <ExternalLink className="w-6 h-6 ml-3 group-hover:animate-pulse" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-blue-500/20 py-8 px-6 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-200">© 2025 Mohamed Sallah. All rights reserved. Made with ❤️ and lots of ☕</p>
        </div>
      </footer>
    </main>
  );
}