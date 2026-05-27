import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { Features } from '@/components/sections/Features';
import { UseCases } from '@/components/sections/UseCases';
import { Compare } from '@/components/sections/Compare';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TwoApps } from '@/components/sections/TwoApps';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <UseCases />
      <Compare />
      <HowItWorks />
      <TwoApps />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
