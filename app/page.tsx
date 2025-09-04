"use client";
import React, { useState, useMemo, useCallback} from "react";
import BookADemo from "./components/BookADemo/BookADemo";
import Logos from './components/Logos/Logos';
import { FeaturedProduct } from "./components/FeaturedProduct/FeaturedProduct";
import TheValue from "./components/TheValue/TheValue";
import HeroHome from "./components/HeroHome/HeroHome";

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

