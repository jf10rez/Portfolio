import { About } from "./components/about/About";
import { BannerMain } from "./components/BannerMain";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/skills/Skills";

export const HomePage = () => {
  return (
    <>
      <NavBar />
        <BannerMain />
        <Skills />
        <About />
    </>
  );
};
