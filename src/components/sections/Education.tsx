import { GraduationCap, Code, Database, Server, Cpu, Layout, Terminal, FileCode, Flame, Smartphone, GitBranch, Github, Zap } from 'lucide-react';
import { EducationEntry } from '../shared/EducationEntry';
import { SkillBadge } from '../shared/SkillBadge';

export const Education = () => {
  return (
    <>
    <div className="md:col-span-5 space-y-16 border-l border-gray-800 md:pl-12">
      {/* Education */}
      <section className="pl-4 md:pl-0">
        <h3 className="font-josefin text-2xl text-white mb-8 border-b border-gray-700 pb-4 inline-block pr-12 font-bold">
          EDUCATION
        </h3>
        
        <div className="space-y-8">
          <EducationEntry icon={GraduationCap} school="Western Institute of Technology" degree="Bachelor of Science in Information Technology" years="2021 - Present" />
          <EducationEntry icon={GraduationCap} school="Cuyo National High School" degree="Senior High School" years="2018 - 2020" />
          <EducationEntry icon={GraduationCap} school="Danawan National High School" degree="Junior High School" years="2014-2018" />
          <EducationEntry icon={GraduationCap} school="Los Angeles Elementary School" degree="" years="2008 - 2014" />
        </div>
      </section>
      <div className="w-16 h-px bg-gray-600 mx-auto"></div>

      {/* Skills */}
      <section id="skills" className="animate-slide-up delay-700 pl-4 md:pl-0 scroll-mt-32">
        <h3 className="font-josefin text-2xl text-white mb-8 border-b border-gray-700 pb-4 inline-block pr-12 font-bold">
          SKILLS
        </h3>
        
        <div className="grid grid-cols-3 gap-8 place-items-center">
          {/* HTML */}
          <SkillBadge icon={Layout} label="HTML" color="#e34f26" />
          {/* CSS */}
          <SkillBadge icon={Code} label="CSS" color="#264de4" />
          {/* TypeScript */}
          <SkillBadge icon={FileCode} label="TypeScript" color="#3178c6" />
          
          {/* MongoDB */}
          <SkillBadge icon={Database} label="MongoDB" color="#47a248" />
          {/* Firebase */}
          <SkillBadge icon={Flame} label="Firebase" color="#ffca28" />
          {/* Express */}
          <SkillBadge icon={Server} label="Express" color="#ffffff" />
          
          {/* React */}
          <SkillBadge icon={Cpu} label="React" color="#61dafb" />
          {/* Expo */}
          <SkillBadge icon={Smartphone} label="Expo" color="#ffffff" />
          {/* Vite */}
          <SkillBadge icon={Zap} label="Vite" color="#646CFF" />
          {/* Node */}
          <SkillBadge icon={Terminal} label="Node" color="#339933" />
          {/* Git */}
          <SkillBadge icon={GitBranch} label="Git" color="#f05032" />
          {/* Github */}
          <SkillBadge icon={Github} label="Github" color="#ffffff" />
        </div>
      </section>
      
       <div className="w-full h-px bg-gray-800 mt-12"></div>
    </div>
    <style>
      
{`
  /* Education Section Styles */
  .education-section {
    grid-column: span 5 / span 5;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    border-left: 1px solid rgb(31, 41, 55);
    padding-left: 0;
  }

  @media (min-width: 768px) {
    .education-section {
      padding-left: 3rem;
    }
  }

  .education-title {
    font-family: 'Josefin Slab', serif;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(55, 65, 81);
    padding-bottom: 1rem;
    display: inline-block;
    padding-right: 3rem;
    font-weight: bold;
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .education-divider {
    width: 4rem;
    height: 1px;
    background-color: rgb(75, 85, 99);
    margin-left: auto;
    margin-right: auto;
  }

  .skills-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .skills-title {
    font-family: 'Josefin Slab', serif;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(55, 65, 81);
    padding-bottom: 1rem;
    display: inline-block;
    padding-right: 3rem;
    font-weight: bold;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    place-items: center;
  }

  .education-bottom-divider {
    width: 100%;
    height: 1px;
    background-color: rgb(31, 41, 55);
    margin-top: 3rem;
  }
    `}</style>
  </>
  );
};
