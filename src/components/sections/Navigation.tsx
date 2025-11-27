import { Facebook, Send, Instagram } from 'lucide-react';
import { SocialIcon } from '../shared/SocialIcon';
import { NavItem } from '../shared/NavItem';
import { XIcon } from '../shared/XIcon';

interface NavigationProps {
  activeTab: string;
  scrollToSection: (sectionId: string, tabName: string) => void;
}

export const Navigation = ({ activeTab, scrollToSection }: NavigationProps) => {
  return (
    <>
    <nav className="sticky top-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-y border-gray-700 mb-16 animate-fade-in delay-300 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Navigation Links */}
        <div className="flex-[3] flex border-l border-gray-700 border-r md:border-r-0">
          <NavItem label="About Me" active={activeTab === 'About Me'} onClick={() => scrollToSection('about', 'About Me')} />
          <NavItem label="Projects" active={activeTab === 'Projects'} onClick={() => scrollToSection('works', 'Projects')} />
          <NavItem label="Skills" active={activeTab === 'Skills'} onClick={() => scrollToSection('skills', 'Skills')} />
        </div>

        {/* Social Icons */}
        <div className="flex-1 flex justify-center items-center gap-6 py-4 border-l border-r border-gray-700 md:border-l border-t md:border-t-0">
          <SocialIcon Icon={Facebook} href="https://www.facebook.com/share/1ADVQ2LdQM/" />
          <SocialIcon Icon={Instagram} href="https://www.instagram.com/5_whole_pizza/" />
          <SocialIcon Icon={XIcon} href="https://x.com/Gawgawaw" />
          <SocialIcon Icon={Send} href="https://telegram.org/dl" /> 
        </div>
      </div>
    </nav>
    <style>
      
{`
  /* Navigation Section Styles */
  .navigation {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(4px);
    border-top: 1px solid rgb(55, 65, 81);
    border-bottom: 1px solid rgb(55, 65, 81);
    margin-bottom: 4rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }

  .navigation-container {
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .navigation-container {
      flex-direction: row;
    }
  }

  .navigation-links {
    flex: 3;
    display: flex;
    border-left: 1px solid rgb(55, 65, 81);
    border-right: 1px solid rgb(55, 65, 81);
  }

  @media (min-width: 768px) {
    .navigation-links {
      border-right: none;
    }
  }

  .navigation-social {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    border-left: 1px solid rgb(55, 65, 81);
    border-right: 1px solid rgb(55, 65, 81);
    border-top: 1px solid rgb(55, 65, 81);
  }

  @media (min-width: 768px) {
    .navigation-social {
      border-left: 1px solid rgb(55, 65, 81);
      border-top: none;
    }
  }
    `}</style>
  </>
  );
};
