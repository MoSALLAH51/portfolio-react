import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Mail, Github, Linkedin, ExternalLink, Code, Smartphone, Database, ChevronDown, Star, Zap, Rocket, ChevronLeft, ChevronRight, Play, X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom"; // إضافة useNavigate

const projects = [
{
  id: 1,  
  title: "Noor Go",
  description: "Saudi taxi booking app with real-time tracking, Socket integration, and Firebase connectivity.",
  fullDescription: "Noor Go is a feature-rich mobile application tailored for the Saudi Arabian market, offering a fast, modern, and reliable taxi booking experience. Built with a sharp focus on user convenience and real-time interactions, the app bridges passengers and drivers through smooth, low-latency communication and intuitive design. Key features include live GPS tracking, Socket.IO-powered live updates, Firebase integration for secure authentication and cloud storage, and intelligent trip management with support for future payment gateways.",
  technologies: ["Flutter", "Firebase", "Socket.IO", "Google Maps SDK", "Clean Architecture", "BLoC Pattern"],
  link: "#",
  github: "",
  video: "https://youtu.be/p720o-Gj6SI",
  type: "mobile",
  downloadUrl:"https://play.google.com/store/apps/details?id=com.paradox.noorgo_customer",
  gradient: "from-sky-400 via-blue-500 to-indigo-600",
  images: [
    "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/Noor%20Go%2FFeature%20Graphic.png?alt=media&token=20bed5d8-7855-4b14-8eb7-a6b2e85b3b0e",
    "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/Noor%20Go%2Fimae5.png?alt=media&token=2a90ac81-8478-48d3-be29-1c2688d45522",
    "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/Noor%20Go%2Fimage54.png?alt=media&token=6c1ee8b2-485b-4b3b-9827-3837fe09afa8",
    "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/Noor%20Go%2Fimage788.png?alt=media&token=0b1fc41f-50d0-41fc-85f9-842e310a47ce"
  ]
},

  {
    id: 2,  
title: "Work Accounts – Smart Accounting App",
description: "AI-powered ERP-style accounting application built with Flutter and SQLite, featuring invoices, budgets, financial reports, and a built-in accounting chatbot assistant.",
fullDescription: "Work Accounts is a comprehensive ERP-style accounting application developed with Flutter and SQLite, designed to empower accountants and small businesses with an all-in-one financial solution. Core features include invoice generation, budget planning, income and expense tracking, multi-currency support, and advanced financial reporting. What makes this app truly unique is its **integrated intelligent accounting chatbot**, acting as a smart assistant that helps users manage transactions, answer accounting-related queries, and provide insights in real time. By combining a clean architecture with AI-powered interaction, Work Accounts offers both reliability and innovation, making financial management smarter and more intuitive.",
    technologies: ["Flutter", "Sqflite", "Dart", "RESTFUL API"],
    link: "#",
    github: "",
    video: "https://www.youtube.com/watch?v=-BzM9Db5n_g",
    type: "mobile",
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/Work%20Accountant%2F7550105-02.png?alt=media&token=036bde33-d50b-41d0-8751-44fa57ad2b0e",
      "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/Work%20Accountant%2F12.png?alt=media&token=8faa86de-8b6d-4c06-9952-cd61dda2c09e",
      "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/Work%20Accountant%2F31.png?alt=media&token=4681a483-3034-4cca-9863-28923dec444e"
    ]
  },
    {
    id: 3,  
    title: "Warehouse Management",
    description: "Flutter mobile app connected to PHP backend for inventory monitoring and warehouse management.",
    fullDescription: "Complete warehouse management solution with Flutter mobile app and PHP backend. Features include inventory tracking, stock level monitoring, barcode scanning, order management, supplier management, and real-time reporting. The system helps businesses optimize their warehouse operations and reduce inventory costs.",
    technologies: ["Flutter", "PHP", "MySQL", "REST API"],
    link: "#",
    downloadUrl:"https://t.me/mosallah47/3",
    github: "https://github.com/MoSallah21/warehouses_app",
    video: "https://youtu.be/6eETaRxAC0I",
    type: "mobile",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/eks%2FChatGPT%20Image%20Aug%2015%2C%202025%2C%2005_57_03%20PM.png?alt=media&token=f3e4b712-8288-49d1-b376-ded9daa620b3",
      "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/eks%2Fbc4a1562-8a87-45b1-b60e-00c9c1e2ae89.png?alt=media&token=26ffbf52-fcb2-41b9-8f40-07fccaa1a56a",
      "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/eks%2F4b7c37af-4f2b-41af-8705-7f13f963414e.png?alt=media&token=cae77454-fac4-426d-a5b4-de84269c4c74",
      "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/eks%2F9bc466f3-f22f-4e3a-b8a5-772bd1232a2b.png?alt=media&token=ebd58aa4-6db0-4382-ab6e-571964ccacfe"
    ]
  },

  {   
    id: 4, 
    title: "Premier League Dataset Collection",
    description: "Collected 1,140+ Premier League match samples over 3 seasons for predictive analysis. Dataset available on Kaggle.",
    fullDescription: "Comprehensive dataset of Premier League matches including scores, player stats, team performance, and historical trends. This dataset powers predictive models and statistical analysis in football applications. Fully available for download and exploration on Kaggle.",
    technologies: ["Python", "Web Scraping", "Pandas", "NumPy"],
    link: "https://www.kaggle.com/datasets/mohamadsallah5/english-premier-league-stats20212024", 
    github: "", 
    video: "", 
    type: "dataset",
    gradient: "from-green-400 via-lime-500 to-yellow-500",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/football-platform-eddc3.appspot.com/o/mo%20football%2FPremier_League_Logo.svg.png?alt=media&token=8449e33f-62dd-4894-aa79-da1c2a97d19d"
    ]
}
];

const skills = [
  { name: "Flutter", icon: "📱" },
  { name: "Javascript", icon: "⚛️" },
  { name: "PHP", icon: "🐘" },
  { name: "Python", icon: "🐍" },
  { name: "Firebase", icon: "🔥" },
  { name: "MySQL", icon: "🗄️" }
];

const getProjectIcon = (type) => {
  switch(type) {
    case 'mobile': 
      return <Smartphone className="w-4 h-4 sm:w-6 sm:h-6" />;
    case 'web': 
      return <Code className="w-4 h-4 sm:w-6 sm:h-6" />;
    case 'dataset': 
      return <Database className="w-4 h-4 sm:w-6 sm:h-6" />;
    default: 
      return <Database className="w-4 h-4 sm:w-6 sm:h-6" />;
  }
};

// Image Carousel Component - Mobile Optimized
const ImageCarousel = ({ images, projectTitle }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative mb-4 sm:mb-6 group/carousel">
      <div 
        className="relative h-32 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden bg-slate-800 border border-blue-500/20 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          src={images[currentImage]} 
          alt={`${projectTitle} - صورة ${currentImage + 1}`}
          className="w-full h-full object-cover transition-all duration-500 group-hover/carousel:scale-105"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x400/1e293b/3b82f6?text=${encodeURIComponent(projectTitle)}`;
          }}
        />
        
        {/* Navigation arrows - Hidden on very small screens */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-blue-900/70 hover:bg-blue-800/80 text-cyan-300 p-1 sm:p-2 rounded-full opacity-80 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 border border-cyan-400/30"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-blue-900/70 hover:bg-blue-800/80 text-cyan-300 p-1 sm:p-2 rounded-full opacity-80 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 border border-cyan-400/30"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </>
        )}
        
        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-cyan-300 scale-125 shadow-lg shadow-cyan-400/50' 
                    : 'bg-blue-300/50 hover:bg-cyan-300/70'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Swipe indicator for mobile */}
        <div className="absolute top-2 right-2 sm:hidden">
          <div className="bg-slate-900/60 backdrop-blur-sm text-cyan-300 text-xs px-2 py-1 rounded-full">
            ⇄ اسحب
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // إضافة hook للتوجيه

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // دالة للانتقال لصفحة تفاصيل المشروع
  const openProjectDetail = (project) => {
    if (project.link && project.link !== "#") {
      window.open(project.link, '_blank');
    } else {
      // الانتقال لصفحة التفاصيل مع تمرير بيانات المشروع
      navigate(`/project/${project.id}`, { state: { project } });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscape);

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
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
      observer.disconnect();
    };
  }, [isMobile]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden relative">
      {/* Animated Background - Optimized for mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-cyan-950/30 to-slate-950/40"></div>
        
        {/* Floating particles - Reduced for mobile */}
        {[...Array(isMobile ? 10 : 25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: '0 0 10px #22d3ee'
            }}
          />
        ))}
        
        {/* Gradient orbs - Smaller on mobile */}
        <div className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
      </div>

      {/* Mouse Follower - Desktop only */}
      {!isMobile && (
        <div 
          className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-100 shadow-lg shadow-cyan-400/50"
          style={{
            transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`
          }}
        />
      )}

      {/* Header - Mobile Optimized */}
      <header className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl border-b border-cyan-400/20 z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Mohamad Sallah
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-6">
              <a href="#projects" className="text-cyan-300 hover:text-cyan-200 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">Projects</a>
              <a href="#skills" className="text-cyan-300 hover:text-cyan-200 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">Skills</a>
              <a href="#contact" className="text-cyan-300 hover:text-cyan-200 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden text-cyan-300 p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20">
              <div className="flex flex-col gap-4 p-4">
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-cyan-300 hover:text-cyan-200 transition-all duration-300">Projects</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-cyan-300 hover:text-cyan-200 transition-all duration-300">Skills</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-cyan-300 hover:text-cyan-200 transition-all duration-300">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Mobile Optimized */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-16 sm:pt-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="relative mb-6 sm:mb-8 inline-block">
            <div className="w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/30">
              <span className="text-slate-900 text-2xl sm:text-5xl font-bold">MS</span>
            </div>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>
          
          <h1 className="text-3xl sm:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg leading-tight" style={{
            textShadow: '0 0 30px rgba(34, 211, 238, 0.3)'
          }}>
            MOHAMAD SALLAH
          </h1>
          
          <div className="mb-6 sm:mb-8 overflow-hidden">
            <p className="text-lg sm:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed font-light tracking-wider">
              CROSS-PLATFORM MOBILE ENGINEER
            </p>
            <p className="text-sm sm:text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed mt-2 sm:mt-4 px-2">
              Specializing in Flutter & AI development with cutting-edge technologies
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamedsallah176@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105 border border-cyan-400/30 w-full sm:w-auto">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                Get In Touch
              </Button>
            </a>

            <Button variant="outline" className="group border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20 w-full sm:w-auto">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-spin" />
              View Work
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 sm:gap-8 mb-8 sm:mb-0">
            <a href="https://github.com/MoSallah21" 
              className="group text-cyan-300 hover:text-cyan-200 transition-all duration-300 hover:scale-125 hover:drop-shadow-lg">
              <Github className="w-8 h-8 sm:w-10 sm:h-10 group-hover:animate-pulse" />
            </a>
            <a href="https://www.linkedin.com/in/mohamad-sallah-aa3184326/" 
              className="group text-cyan-300 hover:text-cyan-200 transition-all duration-300 hover:scale-125 hover:drop-shadow-lg">
              <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 group-hover:animate-pulse" />
            </a>
          </div>
          
          <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <ChevronDown className="w-8 h-8 text-cyan-300" />
          </div>
        </div>
      </section>

      {/* Projects Section - Mobile Optimized */}
      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            data-animate
            id="projects-title"
            className={`text-center mb-8 sm:mb-16 transition-all duration-1000 transform ${
              isVisible['projects-title'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{
              textShadow: '0 0 30px rgba(34, 211, 238, 0.3)'
            }}>
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-blue-200">Crafted with passion and precision</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                data-animate
                id={`project-${index}`}
                className={`group bg-slate-800/40 backdrop-blur-sm border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-400/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible[`project-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-4 sm:p-8 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start justify-between mb-4 sm:mb-6 relative z-10">
                    <div className="flex items-center gap-2 sm:gap-4 flex-1">
                      <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg shadow-cyan-500/30 group-hover:animate-pulse border border-cyan-400/30`}>
                        {getProjectIcon(project.type)}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-cyan-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:animate-spin flex-shrink-0" />
                  </div>
                  
                  {/* Project Images Carousel */}
                  <ImageCarousel images={project.images} projectTitle={project.title} />
                  
                  <p className="text-sm sm:text-base text-blue-200 mb-4 sm:mb-6 leading-relaxed group-hover:text-cyan-100 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-8">
                    {project.technologies.slice(0, isMobile ? 4 : project.technologies.length).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 sm:px-4 py-1 sm:py-2 bg-slate-700/50 text-xs sm:text-sm rounded-full text-cyan-200 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {isMobile && project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-xs rounded-full text-cyan-200 border border-cyan-500/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button 
                      className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-105 group/btn border border-cyan-400/30 text-sm sm:text-base py-2 sm:py-3`}
                      onClick={() => openProjectDetail(project)}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover/btn:animate-bounce" />
                      View Project
                    </Button>
                    
                    <div className="flex gap-2 sm:gap-3">
                      {project.github && (
                        <Button 
                          variant="outline" 
                          className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 group/btn text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2 group-hover/btn:animate-spin" />
                          <span className="hidden sm:inline">Code</span>
                        </Button>
                      )}
                      
                      {project.video && (
                        <Button 
                          variant="outline" 
                          className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 group/btn text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4"
                          onClick={() => window.open(project.video, '_blank')}
                        >
                          <Play className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2 group-hover/btn:animate-pulse" />
                          <span className="hidden sm:inline">Video</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Mobile Optimized */}
      <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-800/20 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto">
          <div 
            data-animate
            id="skills-title"
            className={`text-center mb-8 sm:mb-16 transition-all duration-1000 transform ${
              isVisible['skills-title'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{
              textShadow: '0 0 30px rgba(34, 211, 238, 0.3)'
            }}>
              Technical Skills
            </h2>
            <p className="text-lg sm:text-xl text-blue-200">Technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                data-animate
                id={`skill-${index}`}
                className={`group p-4 sm:p-6 bg-slate-800/40 rounded-lg sm:rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 shadow-lg shadow-cyan-500/10 ${
                  isVisible[`skill-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-2xl sm:text-4xl group-hover:animate-bounce mb-2 sm:mb-3">{skill.icon}</span>
                  <span className="font-bold text-sm sm:text-lg text-cyan-100">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div 
            data-animate
            id="contact-content"
            className={`transition-all duration-1000 transform ${
              isVisible['contact-content'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <Rocket className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-cyan-400 animate-bounce" />
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent" style={{
              textShadow: '0 0 30px rgba(34, 211, 238, 0.3)'
            }}>
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-10 leading-relaxed px-2">
              Have an amazing project in mind? Let's discuss it and bring your vision to life!
            </p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamedsallah176@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-110 border border-cyan-400/30 w-full sm:w-auto"
              >
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 group-hover:animate-bounce" />
                Start the Conversation
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:animate-pulse" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="bg-slate-900/60 border-t border-cyan-400/20 py-6 sm:py-8 px-4 sm:px-6 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-blue-200">© 2025 Mohamad Sallah. All rights reserved. Made with ❤️ and lots of ☕</p>
        </div>
      </footer>
    </main>
  );
}

export { projects };