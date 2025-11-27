import { ProjectPlaceholder } from '../shared/ProjectPlaceholder';
import todoImage from '../../../assets/images/todo.png';
import assumptionImage from '../../../assets/images/assumption.png';

export const Projects = () => {
  return (
    <>
    <div id="works" className="md:col-span-7 space-y-12 animate-slide-in-left delay-500 scroll-mt-32">
      <h3 className="font-josefin text-3xl text-white mb-8 border-b border-gray-700 pb-4 inline-block pr-12 font-bold">
        MY WORKS
      </h3>
      
      <div className="space-y-16">
        <ProjectPlaceholder 
          title="Awesome To-do"
          description="A full-featured online shopping platform built with React and Node.js. Features include real-time inventory management, secure payment integration, and a dynamic dashboard for admin analytics. Designed to scale with business growth."
          image={todoImage}
        />
        <ProjectPlaceholder 
          title="Assumption Iloilo Library"
          description="A collaborative productivity tool designed for remote teams. Utilizes Firebase for real-time data syncing, allowing users to share lists, assign tasks, and track progress seamlessly across devices."
          image={assumptionImage}
        />
      </div>
    </div>
    <style>
      
{`
  /* Projects Section Styles */
  .projects-section {
    grid-column: span 7 / span 7;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    scroll-margin-top: 8rem;
  }

  .projects-title {
    font-family: 'Josefin Slab', serif;
    font-size: 1.875rem;
    color: white;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(55, 65, 81);
    padding-bottom: 1rem;
    display: inline-block;
    padding-right: 3rem;
    font-weight: bold;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
    `}</style>
  </>
  );
};
