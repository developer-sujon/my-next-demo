import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  console.log(process.env.API_KEY);

  return (
    <main>
      {/* <AboutHeroSection />
      <AboutMissionSection />
      <AboutTeamSection />
      <AboutCtaSection /> */}
      this is about page
    </main>
  );
};

export default About;
