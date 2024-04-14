import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

import { Button } from './ui/button';

const footerItems = [
  {
    name: 'Venues',
    href: '/venues',
    list: ['Bengaluru', 'Chennai', 'Mysore', 'Hyderabad', 'Mumbai', 'Delhi'],
  },
  {
    name: 'Suppliers',
    href: '/suppliers',
    list: [
      'Photographers',
      'Decorators',
      'Venue Planners',
      'Choreographers',
      'Designers',
      'Makeup Artists',
    ],
  },
  {
    name: 'Quick Link',
    href: '/quicklinks',
    list: [
      'About Us',
      'Careers',
      'Contact Us',
      'Terms & Conditions',
      'Privacy Policy',
    ],
  },
  {
    name: 'Newsletter',
    href: '/newsletter',
    list: ['Subscribe to get latest media updates and offers.', 'Live Chat'],
  },
];

const Footer = () => {
  return (
    <footer className="mt-4 flex items-center gap-20 bg-gray-100 p-4 text-center">
      <Image src="/logo.svg" alt="logo" width={200} height={200} />
      <div>
        <p className="text-2xl font-extrabold text-black">HARAVARAM EVENTS</p>
        <p className="font-bold">Social Media</p>
        <p className="my-4 flex justify-center gap-5">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
        </p>
      </div>
      <div className="flex items-start justify-between gap-10 ">
        {footerItems.map((item, index) => (
          <div key={index}>
            <h2 className="mb-8 flex text-lg font-bold">{item.name}</h2>
            <ul>
              {item.list.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a href={`${item.href}/${subItem}`} className="flex text-sm">
                    {subItem !== 'Live Chat' ? (
                      subItem
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-8 font-bold"
                      >
                        {subItem}
                      </Button>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
