export const SkillBadge = ({ icon: Icon, label, color }: { icon: any, label: string, color: string }) => (
  <>
    <div className="flex flex-col items-center gap-2 group cursor-default hover:scale-105 transition-transform duration-300">
      <div className={`
        w-12 h-12 flex items-center justify-center rounded-lg border border-gray-800 bg-gray-900 
        transition-colors duration-300 group-hover:border-gray-600 shadow-sm group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]
      `} style={{ color }}>
        <Icon size={28} />
      </div>
      <span className="text-[10px] text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">{label}</span>
    </div>
    <style>
      
{`
  /* SkillBadge Component Styles */
  .skill-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: default;
    transition: transform 0.3s;
  }

  .skill-badge:hover {
    transform: scale(1.05);
  }

  .skill-icon-container {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 1px solid rgb(31, 41, 55);
    background-color: rgb(17, 24, 39);
    transition: all 0.3s;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .skill-badge:hover .skill-icon-container {
    border-color: rgb(75, 85, 99);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  }

  .skill-label {
    font-size: 0.625rem;
    color: rgb(107, 114, 128);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.3s;
  }

  .skill-badge:hover .skill-label {
    color: rgb(209, 213, 219);
  }
    `}</style>
  </>
);
