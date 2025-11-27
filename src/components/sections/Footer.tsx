import { Facebook, Instagram, Send } from 'lucide-react';
import { SocialIcon } from '../shared/SocialIcon';
import { XIcon } from '../shared/XIcon';

export const Footer = () => {
  return (
    <>
    <footer className="mt-32 border-t border-gray-800 py-12 animate-fade-in delay-700">
      <div className="flex justify-center gap-8 mb-8">
        <SocialIcon Icon={Facebook} href="#" />
        <SocialIcon Icon={Instagram} href="#" />
        <SocialIcon Icon={XIcon} href="#" />
        <SocialIcon Icon={Send} href="#" />
      </div>
      <p className="text-center font-josefin text-sm text-gray-500">
        Copyright © 2024 Shemuel Rei Lagrosa. All Rights Reserved.
      </p>
    </footer>
    <style>
      
{`
  /* Footer Section Styles */
  .footer {
    margin-top: 8rem;
    border-top: 1px solid rgb(31, 41, 55);
    padding: 3rem 0;
  }

  .footer-social {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-copyright {
    text-align: center;
    font-family: 'Josefin Slab', serif;
    font-size: 0.875rem;
    color: rgb(107, 114, 128);
  }
    `}</style>
  </>
  );
};
