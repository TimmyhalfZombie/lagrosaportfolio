import { Facebook, Instagram, Send } from 'lucide-react';
import { SocialIcon } from '../shared/SocialIcon';
import { XIcon } from '../shared/XIcon';

export const Footer = () => {
  return (
    <>
    <footer className="mt-48 border-t border-gray-800 pt-12 pb-0 animate-fade-in delay-700">
      <div className="flex justify-center gap-8 mb-2">
        <SocialIcon Icon={Facebook} href="#" />
        <SocialIcon Icon={Instagram} href="#" />
        <SocialIcon Icon={XIcon} href="#" />
        <SocialIcon Icon={Send} href="#" />
      </div>
      <p className="text-center font-josefin text-sm text-gray-500 -mb-8">
        Copyright © 2024 Shemuel Rei Lagrosa. All Rights Reserved.
      </p>
    </footer>
    <style>
      
{`
  /* Footer Section Styles */
  .footer {
    margin-top: 12rem;
    border-top: 1px solid rgb(31, 41, 55);
    padding-top: 3rem;
    padding-bottom: 0;
  }

  .footer-social {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 0.5rem;
  }

  .footer-copyright {
    text-align: center;
    font-family: 'Josefin Slab', serif;
    font-size: 0.875rem;
    color: rgb(107, 114, 128);
    margin-bottom: -0.5rem;
  }
    `}</style>
  </>
  );
};
