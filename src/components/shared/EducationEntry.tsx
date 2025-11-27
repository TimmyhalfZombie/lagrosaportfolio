export const EducationEntry = ({ icon: Icon, school, degree, years }: { icon: any, school: string, degree: string, years: string }) => (
  <>
    <div className="flex items-start gap-4 group translate-x-2 md:translate-x-0 md:hover:translate-x-2 transition-transform duration-300">
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-500 bg-gray-900 text-gray-300 md:border-gray-700 md:text-gray-500 md:group-hover:border-gray-500 md:group-hover:text-gray-300 transition-colors">
        <Icon size={24} />
      </div>
      <div className="flex flex-col pt-1">
        <h4 className="font-josefin text-gray-300 text-2xl font-bold md:text-white md:group-hover:text-gray-300 md:whitespace-nowrap transition-colors">{school}</h4>
        <p className="font-josefin text-gray-400 text-lg mt-1">{degree}</p>
        <p className="font-josefin text-gray-500 text-base mt-1">{years}</p>
      </div>
    </div>
    <style>{`
  /* EducationEntry Component Styles */
  .education-entry {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    transition: transform 0.3s;
  }

  /* Mobile: Always in hovered position, no hover effect */
  .education-entry {
    transform: translateX(0.5rem);
  }

  /* Desktop: Start at normal position, hover to translate */
  @media (min-width: 768px) {
    .education-entry {
      transform: translateX(0);
    }

    .education-entry:hover {
      transform: translateX(0.5rem);
    }
  }

  .education-icon-container {
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 1px solid rgb(107, 114, 128);
    background-color: rgb(17, 24, 39);
    color: rgb(209, 213, 219);
    transition: all 0.3s;
  }

  /* Desktop: Start with normal colors, hover to change */
  @media (min-width: 768px) {
    .education-icon-container {
      border-color: rgb(55, 65, 81);
      color: rgb(107, 114, 128);
    }

    .education-entry:hover .education-icon-container {
      border-color: rgb(107, 114, 128);
      color: rgb(209, 213, 219);
    }
  }

  .education-content h4 {
    font-family: 'Josefin Slab', serif;
    color: rgb(209, 213, 219);
    font-size: 1.5rem;
    font-weight: bold;
    transition: color 0.3s;
  }

  /* Desktop: Start with white, hover to gray */
  @media (min-width: 768px) {
    .education-content h4 {
      color: white;
      white-space: nowrap;
    }

    .education-entry:hover .education-content h4 {
      color: rgb(209, 213, 219);
    }
  }
    `}</style>
  </>
);
