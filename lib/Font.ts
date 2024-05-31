import localFont from "next/font/local";

export const ClashDisplay = localFont({
  src: [
    {
      path: "../public/Fonts/ClashDisplayBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Fonts/ClashDisplayExtralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Fonts/ClashDisplayLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Fonts/ClashDisplayMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/ClashDisplaySemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Fonts/ClashDisplayRegular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-clash-display",
});
