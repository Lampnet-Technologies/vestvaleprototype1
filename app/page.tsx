'use client';

import { useRef } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import {PropertiesSection} from '@/components/Properties';
import { BespokePropertiesSection } from '@/components/BespokeCard';
import OurStory from '@/components/OurStory';
/* import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from "@/components/Contact" */
import FooterSection from '@/components/FooterSection';
import NewsletterSection from '@/components/NewsletterSection';
import HomeDecor from '@/components/HomeDecor';
import Services from '@/components/Services';
import { Accessories } from '@/components/AccessoriesCard';
/* import OurPartners from '@/components/OurPartners';
import WhatOurCustomersSay from '@/components/WhatOurCustomersSay'; */
import WhatOurCustomersSayandOurPartnersWrapper from '@/components/WhatOurCustomersSayandOurPartnersWrapper';
import BackgroundWrapper from "@/components/BackgroundWrapper";


export default function HomePage() {
  const sections = {
    navbar: useRef<HTMLElement>(null),
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    homeAccessories:useRef<HTMLElement>(null),
    interiorDecor:useRef<HTMLElement>(null),
    homedecor: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
    properties: useRef<HTMLElement>(null),
    service: useRef<HTMLElement>(null),
    partners: useRef<HTMLElement>(null),
    "interior-decor": useRef<HTMLElement>(null),
    bespokeinterior: useRef<HTMLElement>(null)
  };

  const scrollToSection = (key: keyof typeof sections) => {
    sections[key].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='bg-[#17120F] '>
      <Navbar  onNavClick={scrollToSection} />
      <Hero ref={sections.hero} />
      <BackgroundWrapper backgroundUrl="https://res.cloudinary.com/dnoycjq2q/image/upload/v1753287923/mainBg_btg9kv.png">
      <OurStory ref={sections.about} />
      <PropertiesSection ref={sections.interiorDecor} />
      <BespokePropertiesSection ref={sections.bespokeinterior} />
      {/* <HomeDecor ref={sections.homedecor} /> */}
      <Accessories ref={sections.homeAccessories} />
      </BackgroundWrapper>
      <Services ref={sections.services}/>
      <WhatOurCustomersSayandOurPartnersWrapper />
      {/* <WhatOurCustomersSay/> */}
      {/* <TestimonialsSection ref={sections.testimonials} />  */}
      {/* <OurPartners ref={sections.partners}/> */}
      <NewsletterSection ref={sections.service} />
      {/* <ContactSection ref={sections.contact}   />  */}
      <FooterSection />
    </main>
  );
}
