import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { cn } from "@/lib/utils";
import Container from "./components/Container";

export default function Home() {
  return (
    <main
      className=" flex min-h-screen flex-col inset-0 -z-10 h-full w-full
     bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <Navbar />
      <Container>
        <HeroSection />
      </Container>
      <Container
        className={`w-full min-w-full mb-0 max-xl:py-0
         bg-yellow-50 bg-opacity-10 rounded-lg bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] !px-0 !mx-0`}
      >
        <Container className="max-xl:mt-0 ">
          <AboutSection />
        </Container>
      </Container>
      {/* <AchievementsSection /> */}
      <Container className="mt-0">
        <ProjectsSection />
      </Container>
      <Container>
        <EmailSection />
      </Container>

      <Footer />
    </main>
  );
}

{
  /* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */
}

{
  /* <div class="absolute top-0 z-[-2] h-screen w-screen"></div> */
}
