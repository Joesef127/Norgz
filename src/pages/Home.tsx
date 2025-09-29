import Development from "../components/Development";
import HomeFeature from "../components/HomeFeature";
import HomeHero from "../components/HomeHero";
import Mission from "../components/HomeMission";
import NorgzEdge from "../components/NorgzEdge";
import Partner from "../components/Partner";
import PartnerWithUs from "../components/PartnerWithUs";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";
import Sustainability from "../components/Sustainability";
import Team from "../components/Team";
import WhoWeAre from "../components/WhoWeAre";

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
      <HomeFeature />
      <WhoWeAre />
      <Mission />
      <Philosophy />
      <Services />
      <Sustainability />
      <Team />
      <Partner />
      <Development />
      <NorgzEdge />
      <PartnerWithUs />
    </div>
  );
}
