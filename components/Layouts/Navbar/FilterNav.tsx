import Link from 'next/link';
import React from 'react';

type Props = {};

const FilterLinks = [
  {
    label: 'plant pots',
    href: '/',
  },
  {
    label: 'ceramics',
    href: '/',
  },
  {
    label: 'Tables',
    href: '/',
  },
  {
    label: 'chairs',
    href: '/',
  },
  {
    label: 'crockery',
    href: '/',
  },
  {
    label: 'Tableware',
    href: '/',
  },
  {
    label: 'cutlery',
    href: '/',
  },
];

const FilterNav = (props: Props) => {
  return (
    <div className='flex py-4 items-center text-[#726E8D] gap-x-6 capitalize font-satoshi'>
      {FilterLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className='cursor-pointer text-sm hover:text-[#2A254B]'
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FilterNav;
