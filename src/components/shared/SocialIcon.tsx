export const SocialIcon = ({ Icon, href }: { Icon: any, href: string }) => (
  <>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
    >
      <Icon size={20} />
    </a>
    <style>
      
{`
      /* SocialIcon Component Styles */
      .social-icon {
        color: rgb(209, 213, 219);
        transition: all 0.3s;
      }

      .social-icon:hover {
        color: white;
        transform: scale(1.1);
      }
    `}</style>
  </>
);
