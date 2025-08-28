"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import NavbarBase from '@/components/navigation/NavbarBase';

export default function Home() {
  const navbarItems = [
    { name: 'Hero', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'How to Book', id: 'how-to-buy' },
    { name: 'Pricing & Packages', id: 'tokenomics' },
    { name: 'Footer', id: 'footer' }
  ];

  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarBase 
        brand="NovaLens" 
        navItems={navbarItems} 
        className="bg-transparent sticky top-0"
        logo={{
          src: '/images/logo.svg',
          alt: 'NovaLens Logo'
        }}
        leftActionLabel="Book a Shoot"
      />

      <section id="hero">
        <BillboardHero 
          title="Capturing Futures"
          subtitle="Your vision, our lens."
        />
      </section>

      <section id="about">
        <SplitAbout 
          heading="About NovaLens"
          body="Discover our innovative approach to capturing stunning photography that resonates with modern aesthetics and futuristic themes."
        />
      </section>

      <section id="how-to-buy">
        <HowToBuy3D
          heading="How to Book a Shoot"
          items={[
            { title: 'Consultation', description: 'Discuss your needs and vision.', image: '/images/placeholder1.avif' },
            { title: 'Shoot', description: 'Capture the moments.', image: '/images/placeholder2.avif' },
            { title: 'Delivery', description: 'Receive your beautifully edited images.', image: '/images/placeholder3.avif' }
          ]} 
        />
      </section>

      <section id="tokenomics">
        <TextGridTokenomics 
          title="Pricing & Packages"
          description="Choose from our diverse photography packages tailored for your needs."
          tokenData={[
            { value: '$299', description: 'Standard Package' },
            { value: '$499', description: 'Premium Package' },
            { value: '$799', description: 'Event Package' }
          ]}
        />
      </section>

      <footer id="footer">
        <div>
          <h4>NovaLens</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <p>&copy; 2023 NovaLens. All rights reserved.</p>
        </div>
      </footer>
    </SiteThemeProvider>
  );
}
