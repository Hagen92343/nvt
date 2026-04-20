import { Hero } from "@/components/sections/Hero";
import { StatsPin } from "@/components/sections/StatsPin";
import { Quality } from "@/components/sections/Quality";
import { DirectImport } from "@/components/sections/DirectImport";
import { PomponaTeaser } from "@/components/sections/PomponaTeaser";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsPin />
      <Quality />
      <DirectImport />
      <PomponaTeaser />
      <ContactForm />
    </>
  );
}
