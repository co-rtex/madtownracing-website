import { OrganizationJsonLd } from "@/components/layout/OrganizationJsonLd";
import { CampusToMotorsport } from "@/components/home/CampusToMotorsport";
import { CarPreview } from "@/components/home/CarPreview";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { MoreThanADriver } from "@/components/home/MoreThanADriver";
import { NotSimulated } from "@/components/home/NotSimulated";
import { Paddock } from "@/components/home/Paddock";
import { PartnersPreview } from "@/components/home/PartnersPreview";
import { PitStrategy } from "@/components/home/PitStrategy";
import { RoadToGridPreview } from "@/components/home/RoadToGridPreview";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <NotSimulated />
      <MoreThanADriver />
      <CarPreview />
      <PitStrategy />
      <RoadToGridPreview />
      <CampusToMotorsport />
      <PartnersPreview />
      <Paddock />
      <FinalCta />
    </>
  );
}
