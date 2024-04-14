import React from 'react';
import Image from 'next/image';

const CategoryList = () => {
  const categories = [
    {
      name: 'Destination Wedding',
      href: '/destinationwedding',
      imageSrc: '/destination_wedding.svg',
    },
    {
      name: 'Birthday Parties',
      href: '/birthday',
      imageSrc: '/birthday_parties.svg',
    },
    {
      name: 'Photography/Videography',
      href: '/photography',
      imageSrc: '/photography_videography.svg',
    },
    { name: 'Catering', href: '/catering', imageSrc: '/catering.svg' },
    { name: 'Decorations', href: '/decorations', imageSrc: '/decorations.svg' },
    { name: 'Wedding', href: '/wedding', imageSrc: '/wedding.svg' },
    { name: 'Maternity', href: '/maternity', imageSrc: '/maternity.svg' },
    { name: 'Baby Shower', href: '/babyshower', imageSrc: '/baby_shower.svg' },
    {
      name: 'GRUHAPRAVESHA',
      href: '/gruhapravesha',
      imageSrc: '/gruhapravesha.svg',
    },
    {
      name: 'Corporate Events',
      href: '/corporateevents',
      imageSrc: '/corporate_events.svg',
    },
  ];

  return (
    <div className="mx-4 grid grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <Image
            src={category.imageSrc}
            alt={category.name}
            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            width={200}
            height={200}
          />
          <a href={category.href} className="text-lg font-bold">
            {category.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
