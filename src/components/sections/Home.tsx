export const Home = () => {
  return (
    <>
      <header id="home" className="pt-16 pb-8 text-center relative px-4">
        <h2 className="font-josefin text-xl mb-2 text-gray-400 animate-blur-fade">Hi, I am</h2>
        
        <div className="relative inline-block">
          <h1 className="font-josefin text-4xl md:text-8xl text-white tracking-wide mb-4 font-bold animate-tracking-in delay-200 whitespace-nowrap">
            Shemuel Rei Lagrosa
          </h1>
        </div>
      </header>
      <style>

{`
  /* Home Section Styles */
  .home-header {
    padding-top: 4rem;
    padding-bottom: 2rem;
    text-align: center;
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .home-greeting {
    font-family: 'Josefin Slab', serif;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: rgb(156, 163, 175);
  }

  .home-name-container {
    position: relative;
    display: inline-block;
  }

  .home-name {
    font-family: 'Josefin Slab', serif;
    font-size: 2.25rem;
    color: white;
    letter-spacing: 0.025em;
    margin-bottom: 1rem;
    font-weight: bold;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .home-name {
      font-size: 5rem;
    }
  }
      `}</style>
    </>
  );
};
