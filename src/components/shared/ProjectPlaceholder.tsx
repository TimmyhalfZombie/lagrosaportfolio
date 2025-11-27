interface ProjectPlaceholderProps {
  title?: string;
  description?: string;
  image?: string;
}

export const ProjectPlaceholder = ({ title, description, image }: ProjectPlaceholderProps) => (
  <>
    <div className="group cursor-pointer">
      <div className="w-full aspect-video border border-gray-700 bg-gray-900/50 overflow-hidden relative mb-6">
         <div className="absolute inset-0 bg-gray-800/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
         {/* Project Image */}
         {image ? (
           <img 
             src={image} 
             alt={title || "Project Preview"} 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
           />
         ) : (
           <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
              <span className="text-gray-700 font-josefin text-xl group-hover:text-gray-500 transition-colors z-0">Project Preview</span>
           </div>
         )}
         <div className="absolute inset-0 border border-transparent group-hover:border-gray-500 transition-colors duration-500 z-20 pointer-events-none" />
      </div>
      
      <div className="space-y-3 px-1 group-hover:translate-x-1 transition-transform duration-300">
          <h4 className="font-josefin text-3xl text-white font-bold group-hover:text-gray-300 transition-colors">{title || "Project Title"}</h4>
          <p className="font-josefin text-gray-400 text-base leading-relaxed text-justify opacity-80 group-hover:opacity-100 transition-opacity">
              {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>
      </div>
    </div>
    <style>
      
{`
  /* ProjectPlaceholder Component Styles */
  .project-placeholder {
    cursor: pointer;
  }

  .project-image-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 1px solid rgb(55, 65, 81);
    background-color: rgba(17, 24, 39, 0.5);
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;
  }

  .project-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(31, 41, 55, 0.2);
    transition: background-color 0.5s;
    z-index: 10;
  }

  .project-placeholder:hover .project-overlay {
    background-color: transparent;
  }

  .project-image-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.7s ease-out;
    z-index: 0;
  }

  .project-placeholder:hover .project-image-content {
    transform: scale(1.05);
  }

  .project-border-overlay {
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    transition: border-color 0.5s;
    z-index: 20;
    pointer-events: none;
  }

  .project-placeholder:hover .project-border-overlay {
    border-color: rgb(107, 114, 128);
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-left: 0.25rem;
    transition: transform 0.3s;
  }

  .project-placeholder:hover .project-info {
    transform: translateX(0.25rem);
  }

  .project-title {
    font-family: 'Josefin Slab', serif;
    font-size: 1.875rem;
    color: white;
    font-weight: bold;
    transition: color 0.3s;
  }

  .project-placeholder:hover .project-title {
    color: rgb(209, 213, 219);
  }

  .project-description {
    font-family: 'Josefin Slab', serif;
    color: rgb(156, 163, 175);
    font-size: 1rem;
    line-height: 1.75;
    text-align: justify;
    opacity: 0.8;
    transition: opacity 0.3s;
  }

  .project-placeholder:hover .project-description {
    opacity: 1;
  }
    `}</style>
  </>
);
