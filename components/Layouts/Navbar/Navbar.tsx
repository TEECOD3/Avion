'use client';
import Link from 'next/link';
import FilterNav from './FilterNav';
import {
  Menu,
  Search,
  ShoppingCart,
  UserAvatar,
} from '@/components/custom-icons/Index';
import {Separator} from '@/components/ui/separator';

export const Navbar = () => {
  return (
    <nav className='max-w-[1500px]  mx-auto w-full container lg:px-4 flex flex-col'>
      <div className='flex justify-between w-full items-center py-4 '>
        <Search className='cursor-pointer hidden lg:block size-[1rem] lg:size-[1.5rem]' />
        <Link href='/'>
          <h1 className='text-header-3 font-clash-display'>Avion</h1>
        </Link>

        <div className='gap-x-4 hidden lg:flex'>
          <ShoppingCart className='cursor-pointer size-[1rem] lg:size-[1.5rem]' />
          <UserAvatar className='cursor-pointer size-[1rem] lg:size-[1.5rem]' />
        </div>

        <div className='flex gap-x-4 lg:hidden'>
          <Search className='cursor-pointer size-[1rem] lg:size-[1.5rem]' />
          <Menu className='cursor-pointer lg:size-[1.5rem]' />
        </div>
      </div>
      <Separator />
      <div className='max-w-[60%] mx-auto hidden lg:block'>
        <FilterNav />
      </div>
    </nav>
  );
};
