import meImage from '../../../assets/images/me.jpg';

export const AboutMe = () => {
  return (
    <>
    <section id="about" className="relative pt-8 animate-slide-up delay-400 scroll-mt-32">
      <div className="border border-gray-600 p-1 relative hover:border-gray-500 transition-colors duration-500">
        {/* "Floating" Label */}
        <div className="absolute -top-6 left-8 bg-[#1a1a1a] px-6 py-1 border border-gray-600">
          <h3 className="text-2xl font-josefin text-white tracking-widest uppercase">About Me</h3>
        </div>
        {/* Content Container */}
        <div className="p-6 md:p-12 border border-gray-800/50 bg-[#1e1e1e]">
          {/* Photo */}
          <div className="w-full h-64 md:h-80 border border-gray-700 mb-8 flex items-center justify-center overflow-hidden rounded-sm">
             <img 
               src={meImage} 
               alt="Shemuel Rei Lagrosa" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
             />
          </div>
          {/* Text Content */}
          <div className="bg-gray-500/10 p-6 text-base md:text-lg leading-relaxed font-josefin text-gray-400 text-justify ">
            I am a student with a strong interest in programming and web development. I enjoy learning by building practical projects, whether from school requirements to personal experiments. My goal is to continue exploring new technologies and solving problems through code.
          </div>
        </div>
      </div>
    </section>
    <style>
      
{`
  /* AboutMe Section Styles */
  .about-section {
    position: relative;
    padding-top: 2rem;
    scroll-margin-top: 8rem;
  }

  .about-container {
    border: 1px solid rgb(75, 85, 99);
    padding: 0.25rem;
    position: relative;
    transition: border-color 0.5s;
  }

  .about-container:hover {
    border-color: rgb(107, 114, 128);
  }

  .about-label {
    position: absolute;
    top: -1rem;
    left: 2rem;
    background-color: rgb(26, 26, 26);
    padding: 0.25rem 1.5rem;
  }

  .about-label h3 {
    font-family: 'Josefin Slab', serif;
    font-size: 1.5rem;
    color: white;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .about-content {
    padding: 1.5rem;
    border: 1px solid rgba(31, 41, 55, 0.5);
    background-color: rgb(30, 30, 30);
  }

  @media (min-width: 768px) {
    .about-content {
      padding: 3rem;
    }
  }

  .about-photo {
    width: 100%;
    height: 16rem;
    background-color: rgb(17, 24, 39);
    border: 1px solid rgb(55, 65, 81);
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .about-photo {
      height: 20rem;
    }
  }

  .about-photo-gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top right, rgb(17, 24, 39), rgb(31, 41, 55));
    transition: transform 1s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-photo:hover .about-photo-gradient {
    transform: scale(1.05);
  }

  .about-text {
    background-color: rgba(107, 114, 128, 0.1);
    padding: 1.5rem;
    font-size: 1rem;
    line-height: 1.75;
    font-family: 'Josefin Slab', serif;
    color: rgb(156, 163, 175);
    text-align: justify;
    border-left: 2px solid rgb(55, 65, 81);
  }

  @media (min-width: 768px) {
    .about-text {
      font-size: 1.125rem;
    }
  }
    `}</style>
  </>
  );
};
