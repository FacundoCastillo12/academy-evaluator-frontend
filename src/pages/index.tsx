import FAQSection from '@/components/home/landing/FAQSection';
import FeaturesSection from '@/components/home/landing/FeaturesSection';
import LandingSection from '@/components/home/landing/LandingSection';
import StatsSection from '@/components/home/landing/StatsSection';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <LandingSection />
      <StatsSection />
      <FeaturesSection />
      <FAQSection />
    </MainLayout>
  );
}
