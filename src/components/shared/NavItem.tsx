export const NavItem = ({ label, active = false, onClick }: { label: string, active?: boolean, onClick?: () => void }) => (
  <>
    <div 
      onClick={onClick}
      className={`
      flex-1 flex justify-center items-center py-4 border-r border-gray-700 last:border-r-0 cursor-pointer
      hover:bg-gray-800 transition-colors duration-300 text-base tracking-widest uppercase
      ${active ? 'text-white font-bold bg-gray-800' : 'text-gray-400'}
    `}>
      {label}
    </div>
    <style>{`
  /* NavItem Component Styles */
  .nav-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    border-right: 1px solid rgb(55, 65, 81);
    cursor: pointer;
    transition: background-color 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1rem;
  }

  .nav-item:last-child {
    border-right: none;
  }

  .nav-item:hover {
    background-color: rgb(31, 41, 55);
  }

  .nav-item.active {
    color: white;
    font-weight: bold;
    background-color: rgb(31, 41, 55);
  }

  .nav-item.inactive {
    color: rgb(156, 163, 175);
  }
    `}</style>
  </>
);
