import { ProjectPlaceholder } from '../shared/ProjectPlaceholder';
import todoImage from '../../../assets/images/todo.png';
import assumptionImage from '../../../assets/images/assumption.png';

export const Projects = () => {
  return (
    <>
    <div id="works" className="md:col-span-7 space-y-12 animate-slide-in-left delay-500 scroll-mt-32 ml-4 md:ml-0">
      <h3 className="font-josefin text-3xl text-white mb-8 border-b border-gray-700 pb-4 inline-block pr-12 font-bold">
        MY WORKS
      </h3>
      
      <div className="space-y-16">
        <ProjectPlaceholder 
          title="Awesome To-do"
          description="A straightforward tool designed to help users organize daily tasks by adding, editing, and removing items. The main purpose of this project was to practice the basics of web development and learn how to build a functional, interactive application"
          image={todoImage}
          link="https://todo-app-ni-tim.onrender.com/"
        />
        <ProjectPlaceholder 
          title="Assumption Iloilo Library"
          description="A project based on a discontinued concept for the school library. I built it to practice web development and create a simple tool for students to search for books, check availability, and view a campus map. The goal was to explore how a digital catalog could work as an alternative to manual systems."
          image={assumptionImage}
          link="https://assumptioniloilo.vercel.app/#home"
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
