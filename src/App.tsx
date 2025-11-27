import { useState } from 'react';
import { Home } from './components/sections/Home';
import { Navigation } from './components/sections/Navigation';
import { AboutMe } from './components/sections/AboutMe';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Footer } from './components/sections/Footer';

// --- Main Application ---

export default function App() {
  const [activeTab, setActiveTab] = useState('About Me');
  
  const scrollToSection = (sectionId: string, tabName: string) => {
    setActiveTab(tabName);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Adjust for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-300 font-josefin selection:bg-gray-700 selection:text-white pb-20">
      {/* --- Header Section --- */}
      <Home />

      {/* --- Navigation Bar --- */}
      <Navigation activeTab={activeTab} scrollToSection={scrollToSection} />

      <main className="max-w-5xl mx-auto px-6 md:px-12 space-y-24">
        {/* --- About Me Section --- */}
        <AboutMe />

        {/* --- Split Layout: Works & Sidebar --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-gray-800 pt-16">
          {/* Left Column: Works */}
          <Projects />

          {/* Right Column: Education & Skills */}
          <Education />
        </div>
      </main>

      {/* --- Footer --- */}
      <Footer />
      <style>{`
  /* Global App Styles */
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&display=swap');

  .font-josefin {
    font-family: 'Josefin Slab', serif;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUpFade {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDownFade {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeftFade {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes blurFadeIn {
    0% {
      opacity: 0;
      filter: blur(10px);
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
    }
  }

  @keyframes trackingIn {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
      filter: blur(12px);
    }
    100% {
      letter-spacing: 0.025em;
      opacity: 1;
      filter: blur(0);
    }
  }

  /* Animation Classes */
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
    opacity: 0;
  }

  .animate-slide-up {
    animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .animate-slide-down {
    animation: slideDownFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .animate-slide-in-left {
    animation: slideInLeftFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .animate-blur-fade {
    animation: blurFadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
  }

  .animate-tracking-in {
    animation: trackingIn 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }

  .delay-100 {
    animation-delay: 100ms;
  }

  .delay-200 {
    animation-delay: 200ms;
  }

  .delay-300 {
    animation-delay: 300ms;
  }

  .delay-400 {
    animation-delay: 400ms;
  }

  .delay-500 {
    animation-delay: 500ms;
  }

  .delay-700 {
    animation-delay: 700ms;
  }
      `}</style>
    </div>
  );
}
