import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Pricing, { PricingProps } from '../components/pricing/Pricing';
import ExternalLink from '../components/elements/ExternalLink';
import FAQ from '../components/home/FAQ';
import TVAppSection from '../components/home/TVAppSection';
import HeroSection from '../components/home/HeroSection';
import ValueSection from '../components/home/ValueSection';
import AppleService from '../components/home/AppleService';
import CarouselSection from '../components/home/CarouselSection';

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', (e: Event) => {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    });
  }, []);

  return (
    <Layout>
      <HeroSection scrollY={scrollY} />
      <ValueSection scrollY={scrollY} />
      <CarouselSection scrollY={scrollY} />
      <TVAppSection />
      <FAQ />
      <AppleService />
    </Layout>
  );
};

export default Home;
