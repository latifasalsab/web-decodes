// "use client";
import React from "react";
import BookADemo from "./components/BookADemo/BookADemo";
import Logos from './components/Logos/Logos';
import { FeaturedProduct } from "./components/FeaturedProduct/FeaturedProduct";
import TheValue from "./components/TheValue/TheValue";
import HeroHome from "./components/HeroHome/HeroHome";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {


  return (
    <div className='flex flex-col items-center justify-center max-w-[100%] mx-auto'>
      <HeroHome />
      <FeaturedProduct />
      <TheValue />
      <BookADemo />
      <Logos />
    </div>
  );
}

