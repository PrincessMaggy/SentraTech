import {
  getListPage,
  getSinglePage,
} from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import HomeBrand from "@/components/brand/HomeBrand";
import HomeHero from "@/components/hero/HomeHero";
import HomePortfolio from "@/components/portfolio/HomePortfolio";
import HomeService from "@/components/service/HomeService";
import HomeSkill from "@/components/skill/HomeSkill";
import PortfolioInnerPage from "@/components/portfolio/PortfolioInnerPage";
import JoinCommunityCTA from "@/components/cta/JoinCommunityCTA";
export default function Home() {
  const hero = getListPage("/heros/hero.md");
  const skill = getListPage("/skills/skill.md");
  const portfolio = getListPage("/portfolios/_index.md");
  const portfolios = getSinglePage("/portfolios");
  const service = getListPage("/services/_index.md");
  const services = getSinglePage("/services");

  return (
    <main>
      <SeoData
        title="Home"
        meta_title="SentraTech Institute"
        description="Learn Automate Lead"
      />
      <HomeHero hero={hero} />
      <HomeSkill skill={skill} />
      <HomeService
        service={service}
        services={services.slice(0, 4)}
        home={true}
        rootUrl="/"
      />

      <PortfolioInnerPage
        portfolio={portfolio}
        portfolios={portfolios}
        rootUrl="/"
      />
      <JoinCommunityCTA />
    </main>
  );
}
