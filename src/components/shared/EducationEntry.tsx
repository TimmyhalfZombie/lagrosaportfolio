export const EducationEntry = ({ icon: Icon, school, degree, years }: { icon: any, school: string, degree: string, years: string }) => (
  <>
    <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-gray-500 group-hover:border-gray-500 group-hover:text-gray-300 transition-colors">
        <Icon size={24} />
      </div>
      <div className="flex flex-col pt-1">
        <h4 className="font-josefin text-white text-xl font-bold group-hover:text-gray-300 transition-colors">{school}</h4>
        <p className="font-josefin text-gray-400 text-base mt-1">{degree}</p>
        <p className="font-josefin text-gray-500 text-sm mt-1">{years}</p>
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

  .education-entry:hover {
    transform: translateX(0.5rem);
  }

  .education-icon-container {
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 1px solid rgb(55, 65, 81);
    background-color: rgb(17, 24, 39);
    color: rgb(107, 114, 128);
    transition: all 0.3s;
  }

  .education-entry:hover .education-icon-container {
    border-color: rgb(107, 114, 128);
    color: rgb(209, 213, 219);
  }

  .education-content h4 {
    font-family: 'Josefin Slab', serif;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    transition: color 0.3s;
  }

  .education-entry:hover .education-content h4 {
    color: rgb(209, 213, 219);
  }
    `}</style>
  </>
);
