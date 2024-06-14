import React from 'react';
import Image from 'next/image';
import HeroImage from '@/public/assets/Images/anthony-tran-vXymirxr5ac-unsplash.jpg';
import {Button} from '@/components/ui/button';

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className='w-full h-96 lg:h-[39rem] relative'>
      <div className='lg:hidden my-10 container'>
        <div className='relative h-full'>
          <p
            className='font-clash-display text-header-3  text-black;
]'
          >
            Luxury homeware for people who love timeless design quality
          </p>
          <p className='mt-6 text-light-text'>
            Shop the new Spring 2022 collection today
          </p>
          <Button className='w-full mt-10 bg-light-gray text-light-text hover:bg-light-text/20 transition duration-300 ease-out hover:text-gray-600 p-6'>
            View Collection
          </Button>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <Image
          className='object-cover h-full w-full object-right'
          alt='HeroImage'
          src={HeroImage}
          height={1400}
          width={1440}
          placeholder='blur'
          loading='eager'
        />
      </div>

      <div className='absolute top-20 right-20 h-[26rem] w-[39.5rem] bg-white hidden lg:block p-12'>
        <div className='relative h-full'>
          <p
            className='font-clash-display text-header-2  text-black;
]'
          >
            Luxury homeware for people who love timeless design quality
          </p>
          <p className='mt-6 text-light-text'>
            Shop the new Spring 2022 collection today
          </p>
          <Button className='absolute bottom-0 bg-light-gray text-light-text hover:bg-light-text/20 transition duration-300 ease-out hover:text-gray-600 p-6'>
            View Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
