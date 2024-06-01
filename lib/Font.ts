import localFont from 'next/font/local';

const ClashDisplay = localFont({
  src: [
    {
      path: '../public/Fonts/ClashDisplay/ClashDisplayBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/Fonts/ClashDisplay/ClashDisplayExtralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/Fonts/ClashDisplay/ClashDisplayLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/Fonts/ClashDisplay/ClashDisplayMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Fonts/ClashDisplay/ClashDisplaySemibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/Fonts/ClashDisplay/ClashDisplayRegular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-clash-display',
});

const Satoshi = localFont({
  src: [
    {
      path: '../public/Fonts/Satoshi/Satoshi-Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/Fonts/Satoshi/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/Fonts/Satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/Fonts/Satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Fonts/Satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-satoshi',
});

export {ClashDisplay, Satoshi};
