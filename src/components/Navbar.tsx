import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Enquire', href: '/enquire' },
    { name: 'About', href: '/about' },
    { name: 'Media', href: '/media' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between gap-4 bg-blue-500 p-4">
      <Image src="/logo.svg" alt="logo" width={200} height={200} />
      <p
        className="text-2xl text-black"
        style={{
          fontFamily: 'cursive',
          fontStyle: 'italic',
          fontWeight: 'bold',
        }}
      >
        HARAVARAM EVENTS
      </p>
      {navItems.map((item, index) => (
        <a key={index} href={item.href} className="text-lg font-bold">
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
