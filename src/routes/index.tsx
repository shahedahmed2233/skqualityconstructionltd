import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { RecentProjects } from "@/components/site/RecentProjects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const title = "SK Quality Construction Ltd | Roofing & Pointing Specialists UK";
const description =
  "Roofing, pointing, DOFF cleaning and ThermaTech paint removal across the UK. Professional workmanship from SK Quality Construction Ltd. Free quotes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <RecentProjects />
        <BeforeAfter />
        <About />
        <Gallery />
        <Process />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
